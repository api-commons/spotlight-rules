---
layout: rule
artifact: finops
artifact_label: FinOps
slug: finops-cost-require-monthly
title: Finops Cost Require Monthly
severity: info
given: $.costs[*]
message: monthly should be present
description: The `monthly` property of each cost should be present.
experience:
  - governance
  - data-modeling
spec:
  - document
source: []
builtin: false
---
