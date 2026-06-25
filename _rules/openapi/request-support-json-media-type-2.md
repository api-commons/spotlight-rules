---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-json-media-type-2
title: Request Support JSON Media Type 2
severity: error
given: $.paths[*][*].requestBody.content
message: ""
description: "Every request MUST support `application/json` media type. It
  validates the targeted value against a JSON Schema (evaluated at
  `$.paths[*][*].requestBody.content`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - request-body
  - media-types
source:
  - sps-commerce
builtin: false
---
