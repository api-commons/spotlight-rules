---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-no-version-segment
title: Paths No Version Segment
severity: error
given: $.paths
message: Paths MUST NOT Contain API Version
description: "API paths should not contain version numbers like v1 or v2. API
  versioning should be handled through headers, query parameters, or server URLs
  rather than embedded in resource paths. It requires the targeted value not to
  match `/v[0-9]` (evaluated at `$.paths`). Severity: error."
experience:
  - versioning
  - consistency
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
