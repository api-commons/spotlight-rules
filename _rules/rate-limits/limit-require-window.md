---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-window
title: Limit Require Window
severity: warn
given: $.limits[*]
message: window should be present
description: The `window` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
source: []
builtin: false
---
