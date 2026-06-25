---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-workflow-workflowId
title: Arazzo Workflow WorkflowId
severity: warn
given: $.workflows[*]
message: ""
description: Workflow "workflowId" should follow the pattern "^[A-Za-z0-9_\-]+$".
experience:
  - naming
  - consistency
spec:
  - workflows
source: []
builtin: true
---
