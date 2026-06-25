---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-response-require-description
title: Error Response Require Description
severity: warn
given: $.paths.*.*.responses.
message: "{{error}}"
description: "Check if the response description is appropriate for all requests.
  It applies a custom validation to the targeted value (evaluated at
  `$.paths.*.*.responses.`). Severity: warn."
experience:
  - documentation
  - error-handling
spec:
  - paths
  - responses
source:
  - trimble
builtin: false
---
