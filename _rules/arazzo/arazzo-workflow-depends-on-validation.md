---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-depends-on-validation
title: Arazzo Workflow Depends On Validation
severity: info
given: $
message: Every workflow dependency must be valid.
description: Every workflow dependency must be valid.
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-workflow-depends-on-validation/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-workflow-depends-on-validation' (Arazzo Workflow
  Depends On Validation). Requirement: Every workflow dependency must be valid.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  Arazzo. Return only the complete corrected document, with no commentary."
builtin: true
---
