---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-nested-sub-resources
title: Limit Nested Sub Resources
severity: warn
given: $.paths.*~
message: The hierarchy of nested resources SHOULD NOT contain more than 8
  resource names in the path.
description: "The hierarchy of nested resources SHOULD NOT contain more than 8
  resource names in the path. It requires the targeted value not to match
  `^([^/]*/){9,}` (evaluated at `$.paths.*~`). Severity: warn."
experience:
  - usability
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
