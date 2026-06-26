---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-license
title: Skill License
severity: info
given: $.frontmatter
message: A skill should declare a license.
description: A skill should declare a license so consumers know the terms under
  which they can reuse and redistribute it.
experience:
  - governance
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-license/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-license' (Skill License). Requirement: A skill should
  declare a license so consumers know the terms under which they can reuse and
  redistribute it. To fix: Ensure `license` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.frontmatter` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Agent Skill. Return only the complete corrected document, with no commentary."
builtin: false
---
