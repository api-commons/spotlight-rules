---
layout: default
nav: research
title: The alias layer, as it actually is
description: >-
  A reproducible read of how aliases work in the ruleset format today — both forms, what ships
  built-in, the extends boundary, and three behaviours documented only by a unit test.
permalink: /research/aliases/
---

# The alias layer, as it actually is

Aliases are the format's answer to the criticism it gets most often — that writing rules means
writing JSONPath. The answer has existed since v6.2 and is barely used, and the reasons for that are
structural rather than cosmetic.

This page is the evidence behind [spotlight-spec#20]({{ site.repo_rules }}/issues/20), which proposes
lifting aliases out of the core ruleset into their own namespace. It describes **what exists today**,
not what is proposed. Every claim below cites a file, so it can be checked and so it can be shown
wrong.

> **Method.** Read from `@stoplight/spectral-core` **1.23.1** as vendored in
> [spotlight-tools]({{ site.repo_cli }}) at **v6.16.2**, against the schema published in
> [spotlight-spec]({{ site.repo_rules }}). Paths are relative to the tooling repository unless
> stated. The alias implementation carries **no fork-specific commits** — the most recent changes to
> it are upstream, `feat(core): allow extending rulesets with aliases` (January 2026) and
> `feat(core): further adjustments for extending rulesets with aliases` (April 2026). What follows is
> upstream behaviour, described rather than altered.

---

## The two forms

`aliases` is an object at the root of a ruleset. Names must match `^[A-Za-z][A-Za-z0-9_-]*$`
(`packages/core/src/ruleset/meta/ruleset.schema.json`). Values take one of two forms, discriminated
at validation time by whether the value is an object.

### Simple

An **array** of path expressions — always an array, never a bare string:

```yaml
aliases:
  PathItem:
    - $.paths[*]
```

The array requirement is not incidental; it was narrowed deliberately, recorded in the core
changelog as *"aliases take only array-ish given"*.

### Scoped

An object with a required, non-empty `targets` array, each target requiring **both** `formats` and
`given`:

```yaml
aliases:
  ResponseObject:
    targets:
      - formats: [oas2]
        given: ["#OperationObject.responses[*]", "$.responses[*]"]
      - formats: [oas3]
        given: ["#OperationObject.responses[*]", "$.components.responses[*]"]
```

This is the only mechanism in the format by which one name resolves differently depending on the
document being linted.

The TypeScript mirror is `packages/core/src/ruleset/types.ts`:

```ts
export type RulesetAliasesDefinition = Record<string, string[] | RulesetScopedAliasDefinition>;
```

Both forms are specified in the [ruleset specification]({{ site.spec_site }}) — `$defs.aliases`,
`$defs.alias`, `$defs.scopedAlias`, `$defs.aliasTarget` in
`schema/v1/spectral-ruleset.schema.json`.

---

## Referencing

A rule references an alias from `given` with a leading `#`. The matcher is
`/^#([A-Za-z0-9_-]+)/` (`packages/core/src/ruleset/alias.ts`).

**The reference is a prefix, not a whole-value substitution.** Everything after the alias name is
appended verbatim to each expression the alias resolves to. So with `Info: ['$.info']`, the
reference `#Info.contact` produces `$.info.contact`.

Aliases compose, recursively, with **no depth limit**. Cycles are detected via a resolution stack and
reported with the full chain — `Alias "Test" is circular. Resolution stack: Test -> Contact -> Info
-> Root -> Info`. Each branch of the recursion gets its own copy of the stack, so a diamond (the same
alias reached down two different paths) is legal; only a true cycle throws.

Three failure messages exist, all in `alias.ts`:

| Condition | Message |
|---|---|
| `#` not followed by a valid name | `Alias must match /^#([A-Za-z0-9_-]+)/` |
| Cycle | `Alias "X" is circular. Resolution stack: …` |
| Unknown name | `Alias "X" does not exist` |

---

## What ships built-in

**Six aliases, all in the OpenAPI ruleset** (`packages/rulesets/src/oas/index.ts`). The AsyncAPI and
Arazzo rulesets define **none**.

| Alias | Form | Resolves to |
|---|---|---|
| `PathItem` | simple | `$.paths[*]` |
| `OperationObject` | simple | `#PathItem[get,put,post,delete,options,head,patch,trace]` |
| `SecurityRequirementObject` | simple | `$.security[*]`, `#OperationObject.security[*]` |
| `ResponseObject` | scoped | oas2 → `$.responses[*]`; oas3 → `$.components.responses[*]` (both plus `#OperationObject.responses[*]`) |
| `LinkObject` | scoped | oas3 only — `$.components.links[*]`, `#ResponseObject.links[*]` |
| `ArrayProperties` | scoped | oas2/3.0 one expression; 3.1 adds a second, because 3.1 permits `type` to be an array |

Three levels of nesting ship in production: `LinkObject` → `ResponseObject` → `OperationObject` →
`PathItem`. The feature is not theoretical; the bundled ruleset depends on it.

The documentation has promised more since the feature landed
(`docs/guides/4c-aliases.md`):

> This will be followed by the Spectral core rulesets providing a common set of aliases for OpenAPI
> and AsyncAPI so that users don't have to do the work at all.

Delivered for OpenAPI. Not delivered for AsyncAPI.

*(Two literal defects in that same doc's "Common Aliases" table, noted for whoever fixes it: it
references `#Path_Item`, an alias the table never defines, and one cell carries a stray double
quote.)*

---

## The extends boundary

**Aliases do not cross `extends`.** If ruleset B defines `PathItem` and ruleset A extends B, rules
written in A cannot use `#PathItem` — they get `Alias "PathItem" does not exist`.

This is deliberate. The test asserting it is named
**`should refuse to resolve externally defined aliases`**
(`packages/core/src/ruleset/__tests__/ruleset.test.ts`).

The mechanism: a rule resolves aliases against `this.owner.aliases`, where `owner` is the ruleset in
whose `rules` the rule was **written** (`packages/core/src/ruleset/rule.ts`). Rules pulled in via
`extends` are taken by reference and keep their original owner, and the rule merger explicitly
preserves it (`packages/core/src/ruleset/mergers/rules.ts`). The validator agrees — for a path under
`rules` it returns `ruleset.aliases` alone, merging only for `overrides`
(`packages/core/src/ruleset/validation/validators/alias.ts`).

Consequences, both real:

- **Good.** Two extended rulesets may define the same alias name with different values and never
  collide. There is a fixture for exactly this (`extended-alias-collision.ts`) asserting no errors.
- **Severe.** An alias is private to the file that declares it. It cannot be published, shared, or
  reused. Every organization extending the OpenAPI ruleset and adding house rules must redeclare
  `PathItem` and `OperationObject` itself — or go back to raw JSONPath.

**Nothing in `docs/` states this.** The behaviour is documented by a test name.

Aliases may be declared at the root of a ruleset or inside a **file-scoped override**, and must be
declared explicitly in each — the docs say this is "to avoid ambiguity". An override targeting a
**JSON Pointer** cannot declare aliases at all; that branch of the schema permits only `files` and
`rules`.

`aliases` is **not** a rule-level property. Both the implementation meta-schema and the published
specification list the permitted rule keys with `additionalProperties: false`, and `aliases` is not
among them.

---

## Three behaviours worth knowing

### 1. A scoped alias that matches no format resolves to nothing, silently

`resolveAliasForFormats` returns `null` when the document's format set is empty or matches no target,
and the caller skips it — no error, no warning. The rule simply never runs. Test:
`should drop aliases not matching any target`.

A rule that never fires and a rule that passes are indistinguishable in the output. The
specification's conformance notes flag the same failure mode arriving through a different door:
format identifiers are open, so a typo like `oas31` validates cleanly and matches no document.

### 2. When targets overlap, the last one wins

Targets are scanned **last to first**, and the first target with any format in the document's
detected set returns — **its entire `given` array, and only its**. There is no union across matching
targets. The source comment states the intent: *"we start from the end to be consistent with
overrides etc. - we generally tend to pick the 'last' value."*

Demonstrated by a document matching both oas2 and oas3 resolving to the oas3 target, because it is
written later.

### 3. One scoped alias changes how the whole ruleset is evaluated

`Ruleset` computes a single boolean, `hasComplexAliases`, at construction. It is `true` if **any**
alias in the ruleset uses the scoped form.

- **False** — every `given` is expanded **once, at load time**, with no format context.
- **True** — no `given` is expanded at load time. All of them resolve **at lint time**, on every run,
  because resolution now depends on the document.

The flag is per-ruleset, not per-alias: one scoped alias moves every rule in that ruleset to lint-time
resolution. Since the bundled OpenAPI ruleset contains three scoped aliases, that is the mode
everyone linting OpenAPI is already in.

---

## Where formats and aliases meet

Aliases are tied to formats **only** through the scoped form. A simple alias has no format awareness
at all and is expanded with no format context.

The format set used at lint time is the **document's detected formats**, not the rule's — the runner
passes `this.document.formats`, populated by evaluating every format predicate registered on the
ruleset against the resolved document. Matching is by object identity on the predicate function.

At **validation** time the picture differs: the validator derives formats from the **rule's own
`formats` array**. The asymmetry is worth being aware of when reasoning about what gets caught before
a run and what does not.

---

## Open, and stated as open

Four things this read could not settle. They are listed because a research page that only publishes
what it is sure of is not a research page.

1. **Whether silent resolution-to-nothing is intended design or tolerated behaviour.** The code does
   it and a test asserts it, but no comment or document justifies it.
2. **Whether formats named only inside an alias target are meant to go unregistered.** `Ruleset`
   collects formats from three places — its own `formats`, those of extended rulesets, and rules'
   own `formats` — and alias targets are not among them, so a format appearing *only* in a target
   could never be detected and that target could never match. Moot in the bundled ruleset, which
   declares all four formats at the top. Code-read; no test either way.
3. **Whether a scoped alias's nested references go unchecked when the referencing rule declares no
   `formats`.** The validation path suggests they do. No test confirms or denies it.
4. **Whether anyone intends to change this.** No fork commit touches the alias implementation, and
   there were no design documents or issues about aliases in either repository before
   [#20]({{ site.repo_rules }}/issues/20).

---

## Why this is the argument for #20

Four problems, one shape. Aliases are declared on a **ruleset**, so they die at the ruleset boundary.
The useful ones are OpenAPI-shaped but live in a ruleset rather than attached to the OpenAPI
**format**, which is the thing they actually describe. Format-awareness is only expressible *inside*
an alias, so it is a property of something private. And because none of it is shareable, the JSONPath
the layer exists to hide is still what most people write.

[spotlight-spec#20]({{ site.repo_rules }}/issues/20) proposes elevating aliases into their own
addressable namespace and attaching the OpenAPI aliases to the OpenAPI format. It is a proposal, not
a decision — and the `extends` refusal it would replace is a real trade-off in favour of isolation,
not a bug, so whatever replaces it inherits the collision problem that refusal was solving.

<div class="card bg-light border-0 mt-4">
  <div class="card-body text-center py-4">
    <p class="mb-3">Read this differently, or found an error? The source is right there — say so.</p>
    <a class="btn btn-primary" href="{{ site.repo_rules }}/issues/20">Argue on the issue →</a>
    <a class="btn btn-outline-secondary ms-2" href="{{ site.discussion }}">Or in the discussion →</a>
  </div>
</div>
