---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-success-actions-validation
title: Arazzo Step Success Actions Validation
severity: info
given: $
message: "{{error}}"
description: Every success action must have a unique "name", and the fields
  "workflowId" and "stepId" are mutually exclusive.
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-success-actions-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-success-actions-validation' (Arazzo Step Success
  Actions Validation). Requirement: Every success action must have a unique
  \"name\", and the fields \"workflowId\" and \"stepId\" are mutually exclusive.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Arazzo. Return only the complete corrected document, with no commentary."
builtin: true
---
