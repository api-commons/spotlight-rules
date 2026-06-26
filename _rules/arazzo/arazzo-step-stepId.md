---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-stepId
title: Arazzo Step StepId
severity: info
given: $.workflows[*].steps[*]
message: Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".
description: Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".
experience:
  - naming
  - consistency
spec:
  - workflows
  - steps
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-stepId/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-stepId' (Arazzo Step StepId). Requirement: Step
  \"stepId\" should follow the pattern \"^[A-Za-z0-9_\\-]+$\". To fix: Ensure
  `stepId` matches the regular expression `^[A-Za-z0-9_\\-]+$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$.workflows[*].steps[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Arazzo. Return only the complete corrected
  document, with no commentary."
builtin: true
---
