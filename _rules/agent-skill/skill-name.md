---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-name
title: Skill Name
severity: info
given: $.frontmatter
message: A skill must declare a name.
description: A skill must declare a name in its frontmatter — it identifies the
  skill to agents and tooling.
experience:
  - governance
  - discoverability
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-name/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-name' (Skill Name). Requirement: A skill must declare a
  name in its frontmatter — it identifies the skill to agents and tooling. To
  fix: Ensure `name` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$.frontmatter` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Agent Skill. Return only the
  complete corrected document, with no commentary."
builtin: false
---
