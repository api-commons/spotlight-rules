---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-operationPath
title: Arazzo Step OperationPath
severity: info
given: $.workflows[*].steps[*]
message: It is recommended to use "operationId" rather than "operationPath".
description: It is recommended to use "operationId" rather than "operationPath".
experience:
  - consistency
  - usability
spec:
  - workflows
  - steps
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-operationPath/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-operationPath' (Arazzo Step OperationPath).
  Requirement: It is recommended to use \"operationId\" rather than
  \"operationPath\". To fix: Ensure `operationPath` is absent or empty (falsy)
  at each matching location. This rule is evaluated at the JSONPath
  `$.workflows[*].steps[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Arazzo. Return only the complete corrected
  document, with no commentary."
builtin: true
---
