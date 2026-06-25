---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-name
title: Plan Require Name
severity: error
given: $.plans[*]
message: name should be present
description: The `name` property of each plan should be present.
experience:
  - data-modeling
  - governance
spec:
  - plans
source: []
builtin: false
---
