---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-description
title: Arazzo Step Description
severity: warn
given: $.workflows[*].steps[*]
message: ""
description: Step "description" should be present and non-empty string.
experience:
  - documentation
spec:
  - workflows
  - steps
source: []
builtin: true
---
