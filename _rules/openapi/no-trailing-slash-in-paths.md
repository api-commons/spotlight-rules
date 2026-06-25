---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-trailing-slash-in-paths
title: No Trailing Slash In Paths
severity: error
given: $.paths.*~
message: A resource MUST be addressable without a trailing slash on the path.
description: "A resource MUST be addressable without a trailing slash on the
  path. It requires the targeted value not to match `/$` (evaluated at
  `$.paths.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
  - api-evangelist
builtin: false
---
