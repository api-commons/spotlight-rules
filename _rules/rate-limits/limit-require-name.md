---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-name
title: Limit Require Name
severity: warn
given: $.limits[*]
message: name should be present
description: The `name` property of each limit should be present.
experience:
  - data-modeling
  - reliability
spec:
  - limits
source: []
builtin: false
---
