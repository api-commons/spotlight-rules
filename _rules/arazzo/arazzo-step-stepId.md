---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-stepId
title: Arazzo Step StepId
severity: warn
given: $.workflows[*].steps[*]
message: ""
description: Step "stepId" should follow the pattern "^[A-Za-z0-9_\-]+$".
experience:
  - naming
  - consistency
spec:
  - workflows
  - steps
source: []
builtin: true
---
