---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-max
title: Limit Require Max
severity: warn
given: $.limits[*]
message: max should be present
description: The `max` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
source: []
builtin: false
---
