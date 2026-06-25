---
layout: rule
artifact: finops
artifact_label: FinOps
slug: finops-cost-require-service
title: Finops Cost Require Service
severity: warn
given: $.costs[*]
message: service should be present
description: The `service` property of each cost should be present.
experience:
  - governance
  - data-modeling
spec:
  - document
source: []
builtin: false
---
