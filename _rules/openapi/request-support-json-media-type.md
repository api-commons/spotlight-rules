---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-json-media-type
title: Request Support JSON Media Type
severity: error
given: $.paths.[*].requestBody.content[?(@property.indexOf('json') === -1)]^
message: "{{description}}: {{error}}"
description: "Every request MUST support `application/json` media type. It
  requires the targeted value to be absent or empty (evaluated at
  `$.paths.[*].requestBody.content[?(@property.indexOf('json') === -1)]^`).
  Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - request-body
  - media-types
source:
  - adidas
builtin: false
---
