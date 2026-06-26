---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: require-version
title: Require Version
severity: info
given: $.frontmatter
message: Missing `version`.
description: agent-skill document should declare a `version` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/require-version/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'require-version' (Require Version). Requirement: agent-skill
  document should declare a `version` property. To fix: Ensure `version` is
  present and non-empty at each matching location. Guidance: Missing `version`.
  This rule is evaluated at the JSONPath `$.frontmatter` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Agent Skill.
  Return only the complete corrected document, with no commentary."
builtin: false
---
