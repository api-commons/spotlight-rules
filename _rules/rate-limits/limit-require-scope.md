---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-require-scope
title: Limit Require Scope
severity: info
given: $.limits[*]
message: scope should be present
description: The `scope` property of each limit should be present.
experience:
  - reliability
  - governance
spec:
  - limits
source: []
builtin: false
---
