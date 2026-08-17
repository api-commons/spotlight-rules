---
title: The best idea in the format is trapped inside one ruleset
description: >-
  Aliases already solve the JSONPath problem, and almost nobody can use them. Six of them ship, in
  one ruleset, and they cannot cross a ruleset boundary. Here is what aliases actually do today.
---

The most common criticism of this linter has nothing to do with the linter. It is that writing rules
means writing JSONPath, and a lot of people would rather not.

That criticism is fair, and it is also out of date — the format has had an answer since v6.2, and
almost nobody uses it. **Aliases** let you name a JSONPath expression once and reference it by name
everywhere else. The idea is right. The way it is scoped is what keeps it from mattering.

This post is the background reading for
[spotlight-spec#20]({{ site.repo_rules }}/issues/20), which proposes lifting aliases out of the core
ruleset and into their own namespace. Everything below is what exists **today**, read out of the
v6.16.2 source, so the proposal gets argued against the real thing rather than against a memory of
it. The line-by-line version, with file citations for every claim, is on the research page:
[the alias layer, as it actually is](/research/aliases/).

## What an alias is

Two forms. The first is a name pointing at a list of path expressions:

```yaml
aliases:
  PathItem:
    - $.paths[*]
```

Rules then reference it from `given` with a leading `#`:

```yaml
rules:
  path-must-have-summary:
    given: "#PathItem"
```

The reference is a **prefix**, not a substitution of the whole value — whatever follows the alias
name is appended to each expression the alias resolves to. So `#PathItem.parameters` becomes
`$.paths[*].parameters`, and `#Info.contact.name` becomes `$.info.contact.name`. Alias names must
match `^[A-Za-z][A-Za-z0-9_-]*$`.

Aliases compose. An alias can be defined in terms of another alias, to arbitrary depth. Cycles are
detected and reported with the full resolution stack, which is a nicer failure than most of this
format manages.

The second form is where it gets genuinely interesting — a **scoped** alias, which resolves to
different expressions depending on the format of the document being linted:

```yaml
aliases:
  ResponseObject:
    targets:
      - formats: [oas2]
        given: ["#OperationObject.responses[*]", "$.responses[*]"]
      - formats: [oas3]
        given: ["#OperationObject.responses[*]", "$.components.responses[*]"]
```

That is one rule governing two structurally different documents, with the structural difference
handled once, in a named thing, instead of being smeared across every rule that has to care. **This
is the feature that should be famous, and is not.**

## What actually ships

Six aliases, all of them in the OpenAPI ruleset:

| Alias | Form | Resolves to |
|---|---|---|
| `PathItem` | simple | `$.paths[*]` |
| `OperationObject` | simple | `#PathItem[get,put,post,delete,options,head,patch,trace]` |
| `SecurityRequirementObject` | simple | `$.security[*]`, `#OperationObject.security[*]` |
| `ResponseObject` | scoped | oas2 and oas3 variants |
| `LinkObject` | scoped | oas3 only |
| `ArrayProperties` | scoped | oas2/3.0 one way, 3.1 another — because 3.1 allows `type` to be an array |

Three levels of nesting in production: `LinkObject` is defined in terms of `ResponseObject`, which is
defined in terms of `OperationObject`, which is defined in terms of `PathItem`. The feature works,
and the bundled ruleset leans on it.

**The AsyncAPI ruleset defines none. The Arazzo ruleset defines none.** The documentation has
promised otherwise since the feature shipped:

> This will be followed by the Spectral core rulesets providing a common set of aliases for OpenAPI
> and AsyncAPI so that users don't have to do the work at all.

Half-delivered, and then the project stopped moving.

## The part that changes the argument

Here is the behaviour almost nobody knows about, because it is documented in exactly one place — the
name of a unit test.

**Aliases do not cross `extends`.**

If ruleset B defines `PathItem`, and ruleset A extends B, then rules written in A **cannot use
`#PathItem`**. They get `Alias "PathItem" does not exist`. The test that pins this down is called
`should refuse to resolve externally defined aliases`, and "refuse" is the right word — this is
deliberate, not an oversight.

The mechanism is that every rule resolves aliases against the ruleset it was *written in*, not the
ruleset it ends up running in. Rules inherited through `extends` keep their original owner and keep
resolving against that owner's aliases. Which has one genuinely good consequence — two extended
rulesets can define the same alias name differently and never collide — and one severe one:

**An alias is private to the file it was declared in.** It cannot be published, shared, or reused.
Every organization extending the OpenAPI ruleset and writing house rules on top has to redeclare
`PathItem` and `OperationObject` themselves, or go back to raw JSONPath. Which is what they do, which
is why the JSONPath criticism survives a feature that was supposed to answer it.

Nothing in `docs/` says this. You find out by getting the error.

## Two more sharp edges worth knowing

**A scoped alias that matches no format resolves to nothing, silently.** No error, no warning — the
rule simply never runs. If your document is not detected as a format that one of the alias targets
names, everything downstream of that alias quietly does not happen. A rule that never fires and a
rule that passes look identical in the output. (See also the specification's note that format
identifiers are open: a typo like `oas31` validates fine and matches no document. Same failure mode,
different door.)

**When targets overlap, the last one wins.** Targets are scanned in reverse and the first match
returns — deliberately, to match the "last value wins" convention used by overrides. Exactly one
target's expressions are used; there is no union across matching targets. A document detected as both
oas2 and oas3 gets the oas3 target because it is written later in the list.

And a smaller one with real performance consequences: **a single scoped alias changes how the entire
ruleset is evaluated.** If a ruleset contains only simple aliases, every `given` is expanded once, at
load time. Add one scoped alias anywhere and the whole ruleset switches to resolving every `given` at
lint time, on every run, because resolution now depends on the document. Since the bundled OpenAPI
ruleset contains three scoped aliases, that is the mode everyone linting OpenAPI is already in.

## What this argues for

Not "add more aliases." The problems are structural, and all four of them are the same problem seen
from different sides:

- Aliases are **declared on a ruleset**, so they die at the ruleset boundary.
- The useful ones are **OpenAPI-shaped**, but they live in a ruleset you may not want to extend
  rather than attached to the OpenAPI *format*, which is the thing they actually describe.
- Formats can only be selected between **inside** an alias, so format-awareness is a property of
  something private rather than something shared.
- And because none of it is shareable, the JSONPath the alias layer was built to hide is still what
  most people write.

[spotlight-spec#20]({{ site.repo_rules }}/issues/20) proposes the shape: elevate aliases out of the
core ruleset into their own addressable namespace, attach the OpenAPI aliases to the OpenAPI format
so anything linting OpenAPI gets them without importing a ruleset it does not otherwise want, and
switch the examples and documentation so the alias route is the documented way to write a rule and
JSONPath is what you drop to when you need it.

Do that and the criticism stops being true — not because JSONPath went away, but because most people
would stop having to touch it. It also makes rule portability to other policy engines
([#13]({{ site.repo_rules }}/issues/13)) substantially more tractable, since the fewer rules carrying
hand-written JSONPath, the more of them can be translated at all.

## Open questions, genuinely open

The issue is a proposal, not a decision, and there are things nobody has answered:

- Does the alias namespace version with the format, with the specification, or on its own?
- Can a ruleset override an alias it inherits from a format — and is that a footgun?
- Is the alias layer normative, or a registry the specification points at?
- Is the current `extends` refusal worth preserving in some form? It prevents a real class of
  collision, and any sharing mechanism has to answer what it replaces that protection with.

That last one is the one most likely to be underestimated. The current behaviour is not a bug; it is
a trade-off made in favour of isolation over reuse. The argument for #20 is that the trade was made
in the wrong direction for a format that outgrew one tool — but it was a trade, and whatever replaces
it inherits the problem it was solving.

Arguments welcome on [the issue]({{ site.repo_rules }}/issues/20).

---

*Read from `@stoplight/spectral-core` 1.23.1 as vendored in
[spotlight-tools]({{ site.repo_cli }}) at v6.16.2. The alias implementation carries no fork-specific
changes — this is upstream behaviour, described rather than altered. The `aliases` property is
specified in the [ruleset specification]({{ site.spec_site }}).*
