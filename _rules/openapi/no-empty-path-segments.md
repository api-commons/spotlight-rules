---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-empty-path-segments
title: No Empty Path Segments
severity: error
given: $.paths.*~
message: A resource MUST use normalized paths without empty path segments.
description: "A resource MUST use normalized paths without empty path segments.
  It requires the targeted value not to match `//` (evaluated at `$.paths.*~`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
