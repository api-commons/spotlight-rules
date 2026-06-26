---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-allowed-tools-array
title: Skill Allowed Tools Array
severity: info
given: $.frontmatter['allowed-tools']
message: allowed-tools must be an array of tool names.
description: If a skill declares allowed-tools, it must be an array of tool
  names so its capability surface is explicit and auditable.
experience:
  - security
  - governance
spec:
  - frontmatter
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-allowed-tools-array/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-allowed-tools-array' (Skill Allowed Tools Array).
  Requirement: If a skill declares allowed-tools, it must be an array of tool
  names so its capability surface is explicit and auditable. To fix: Adjust the
  targeted value so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.frontmatter['allowed-tools']` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid Agent Skill.
  Return only the complete corrected document, with no commentary."
builtin: false
---
