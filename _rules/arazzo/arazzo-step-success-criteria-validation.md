---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-success-criteria-validation
title: Arazzo Step Success Criteria Validation
severity: info
given: $.workflows[*]
message: "{{error}}"
description: Every success criteria must have a valid context, conditions, and types.
experience:
  - reliability
  - error-handling
spec:
  - workflows
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-success-criteria-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-success-criteria-validation' (Arazzo Step Success
  Criteria Validation). Requirement: Every success criteria must have a valid
  context, conditions, and types. This rule is evaluated at the JSONPath
  `$.workflows[*]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Arazzo. Return only the complete corrected document, with no
  commentary."
builtin: true
---
