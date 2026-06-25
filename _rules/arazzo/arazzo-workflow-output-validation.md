---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-output-validation
title: Arazzo Workflow Output Validation
severity: error
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
source: []
builtin: true
---
