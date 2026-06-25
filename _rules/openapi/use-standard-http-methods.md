---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-standard-http-methods
title: Use Standard HTTP Methods
severity: error
given: $.paths[*].*~
message: ""
description: 'Operations MUST use only the common HTTP methods as outlined in
  the standards guide, and must be in lower-case. It requires the `method` field
  to be one of ["get","post","put","patch","delete","head","options"] (evaluated
  at `$.paths[*].*~`). Severity: error.'
experience:
  - consistency
  - naming
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
