---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-require-allowed-tools
title: Skill Require Allowed Tools
severity: info
given: $.frontmatter
message: Missing `allowed-tools`.
description: agent-skill document should declare a `allowed-tools` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-require-allowed-tools/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-require-allowed-tools' (Require Allowed Tools).
  Requirement: agent-skill document should declare a `allowed-tools` property.
  To fix: Ensure `allowed-tools` is present and non-empty at each matching
  location. Guidance: Missing `allowed-tools`. This rule is evaluated at the
  JSONPath `$.frontmatter` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Agent Skill. Return only the complete corrected
  document, with no commentary."
builtin: false
---
