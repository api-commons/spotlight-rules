---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-description
title: Arazzo Step Description
severity: info
given: $.workflows[*].steps[*]
message: Step "description" should be present and non-empty string.
description: Step "description" should be present and non-empty string.
experience:
  - documentation
spec:
  - workflows
  - steps
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-description/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-description' (Arazzo Step Description).
  Requirement: Step \"description\" should be present and non-empty string. To
  fix: Ensure `description` is present and non-empty at each matching location.
  This rule is evaluated at the JSONPath `$.workflows[*].steps[*]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Arazzo.
  Return only the complete corrected document, with no commentary."
builtin: true
---
