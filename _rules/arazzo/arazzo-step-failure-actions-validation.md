---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-failure-actions-validation
title: Arazzo Step Failure Actions Validation
severity: info
given: $
message: "{{error}}"
description: Every failure action must have a unique "name", and the fields
  "workflowId" and "stepId" are mutually exclusive.
experience:
  - error-handling
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-step-failure-actions-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-step-failure-actions-validation' (Arazzo Step Failure
  Actions Validation). Requirement: Every failure action must have a unique
  \"name\", and the fields \"workflowId\" and \"stepId\" are mutually exclusive.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Arazzo. Return only the complete corrected document, with no commentary."
builtin: true
---
