---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-body-length
title: Skill Body Length
severity: info
given: $.words
message: Skill body is very long (over ~5000 words).
description: Skill bodies should stay focused — very long instructions degrade
  agent performance. Keep the body under ~5000 words.
experience:
  - usability
  - reliability
spec:
  - body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-body-length/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-body-length' (Skill Body Length). Requirement: Skill
  bodies should stay focused — very long instructions degrade agent performance.
  Keep the body under ~5000 words. To fix: Adjust the targeted value so it
  conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$.words` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Agent Skill. Return only the complete corrected document, with
  no commentary."
builtin: false
---
