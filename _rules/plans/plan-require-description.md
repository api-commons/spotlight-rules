---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-description
title: Plan Require Description
severity: info
given: $.plans[*]
message: description should be present
description: The `description` property of each plan should be present.
experience:
  - documentation
  - usability
spec:
  - plans
source: []
builtin: false
---
