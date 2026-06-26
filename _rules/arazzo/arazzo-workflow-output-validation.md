---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-output-validation
title: Arazzo Workflow Output Validation
severity: info
given: $
message: "{{error}}"
description: Every workflow output must have unique name and its value must be a
  valid runtime expression.
experience:
  - data-modeling
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-output-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflow-output-validation' (Arazzo Workflow Output
  Validation). Requirement: Every workflow output must have unique name and its
  value must be a valid runtime expression. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: true
---
