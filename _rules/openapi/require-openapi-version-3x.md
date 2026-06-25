---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-openapi-version-3x
title: Require Openapi Version 3x
severity: error
given: $
message: OpenAPI MUST Be Version 3.x
description: "APIs should use OpenAPI 3.x specification. Analysis of 773 API
  specs shows 97% use OpenAPI 3.x, with 86% on 3.1.0, making it the dominant
  standard for modern API definitions. It requires the `openapi` field to match
  the pattern `^3\\.` (evaluated at `$`). Severity: error."
experience:
  - versioning
  - governance
spec:
  - document
source:
  - api-evangelist
builtin: false
---
