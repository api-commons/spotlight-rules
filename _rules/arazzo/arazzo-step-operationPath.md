---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-operationPath
title: Arazzo Step OperationPath
severity: hint
given: $.workflows[*].steps[*]
message: ""
description: It is recommended to use "operationId" rather than "operationPath".
experience:
  - consistency
  - usability
spec:
  - workflows
  - steps
source: []
builtin: true
---
