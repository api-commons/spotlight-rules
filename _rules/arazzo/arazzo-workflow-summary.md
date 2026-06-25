---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-summary
title: Arazzo Workflow Summary
severity: hint
given: $.workflows[*]
message: ""
description: Workflow "summary" should be present and non-empty string.
experience:
  - documentation
spec:
  - workflows
source: []
builtin: true
---
