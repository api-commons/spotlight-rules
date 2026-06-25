---
layout: rule
artifact: plans
artifact_label: Plans
slug: plan-require-features
title: Plan Require Features
severity: info
given: $.plans[*]
message: features should be present
description: The `features` property of each plan should be present.
experience:
  - usability
  - documentation
spec:
  - plans
source: []
builtin: false
---
