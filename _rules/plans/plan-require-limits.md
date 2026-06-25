---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-limits
title: Plan Require Limits
severity: info
given: $.plans[*]
message: limits should be present
description: The `limits` property of each plan should be present.
experience:
  - governance
  - reliability
spec:
  - plans
source: []
builtin: false
---
