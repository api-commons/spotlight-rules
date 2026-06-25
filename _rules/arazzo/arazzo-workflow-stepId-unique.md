---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-stepId-unique
title: Arazzo Workflow StepId Unique
severity: error
given: $.workflows[*]
message: "{{error}}"
description: Every step must have unique "stepId".
experience:
  - consistency
  - naming
  - reliability
spec:
  - workflows
source: []
builtin: true
---
