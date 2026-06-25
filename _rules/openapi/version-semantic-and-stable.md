---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: version-semantic-and-stable
title: Version Semantic And Stable
severity: error
given: $.info.version
message: "{{description}}: {{error}}"
description: "The API contract MUST have a stable version and MUST follow
  semantic versioning (e.g., '1.0.0'). Words like 'SNAPSHOT' or 'RELEASE' are
  not allowed. It requires the targeted value to match the pattern
  `^(?!.*\\b(SNAPSHOT|RELEASE)\\b)(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\
  $` (evaluated at `$.info.version`). Severity: error."
experience:
  - versioning
  - consistency
spec:
  - info
source:
  - adidas
builtin: false
---
