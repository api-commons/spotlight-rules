---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-price
title: Plan Require Price
severity: warn
given: $.plans[*]
message: price should be present
description: The `price` property of each plan should be present.
experience:
  - governance
  - usability
spec:
  - plans
source: []
builtin: false
---
