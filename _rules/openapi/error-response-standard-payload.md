---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-response-standard-payload
title: Error Response Standard Payload
severity: error
given: $.paths.*.*.responses.
message: "{{error}}"
description: "All 4XX and 5XX response codes must follow Trimble API Standard.
  It applies a custom validation to the targeted value (evaluated at
  `$.paths.*.*.responses.`). Severity: error."
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
source:
  - trimble
builtin: false
---
