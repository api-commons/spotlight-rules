---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-body-present
title: Skill Body Present
severity: info
given: $.words
message: A skill must have body content.
description: A skill must have body content, not just frontmatter — the body is
  the instruction set the agent actually follows.
experience:
  - documentation
  - reliability
spec:
  - body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-body-present/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-body-present' (Skill Body Present). Requirement: A
  skill must have body content, not just frontmatter — the body is the
  instruction set the agent actually follows. To fix: Adjust the targeted value
  so it conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$.words` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Agent Skill. Return only the complete corrected document, with
  no commentary."
builtin: false
---
