---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-failure-actions-validation
title: Arazzo Step Failure Actions Validation
severity: error
given: $
message: "{{error}}"
description: Every failure action must have a unique "name", and the fields
  "workflowId" and "stepId" are mutually exclusive.
experience:
  - error-handling
  - reliability
spec:
  - document
source: []
builtin: true
---
