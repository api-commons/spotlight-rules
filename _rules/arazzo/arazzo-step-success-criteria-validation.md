---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-step-success-criteria-validation
title: Arazzo Step Success Criteria Validation
severity: error
given: $.workflows[*]
message: "{{error}}"
description: Every success criteria must have a valid context, conditions, and types.
experience:
  - reliability
  - error-handling
spec:
  - workflows
source: []
builtin: true
---
