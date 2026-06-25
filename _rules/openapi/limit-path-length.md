---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-path-length
title: Limit Path Length
severity: warn
given: $.paths.*~
message: APIs SHOULD NOT expand their total URL length beyond a few hundred characters.
description: "APIs SHOULD NOT expand their total URL length beyond a few hundred
  characters. It constrains the length of the targeted value and at most 100
  (evaluated at `$.paths.*~`). Severity: warn."
experience:
  - usability
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
