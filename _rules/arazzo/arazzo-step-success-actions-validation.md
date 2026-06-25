---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-success-actions-validation
title: Arazzo Step Success Actions Validation
severity: error
given: $
message: "{{error}}"
description: Every success action must have a unique "name", and the fields
  "workflowId" and "stepId" are mutually exclusive.
experience:
  - reliability
  - consistency
spec:
  - document
source: []
builtin: true
---
