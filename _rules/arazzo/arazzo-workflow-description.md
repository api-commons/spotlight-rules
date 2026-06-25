---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-description
title: Arazzo Workflow Description
severity: warn
given: $.workflows[*]
message: ""
description: Workflow "description" should be present and non-empty string.
experience:
  - documentation
spec:
  - workflows
source: []
builtin: true
---
