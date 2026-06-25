---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: options-must-not-return-body
title: Options Must Not Return Body
severity: error
given: $.paths.*.options.responses[200, 204].content
message: ""
description: "OPTIONS operations should not return a response body for success.
  It requires the targeted value to be absent or empty (evaluated at
  `$.paths.*.options.responses[200, 204].content`). Severity: error."
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
source:
  - sps-commerce
builtin: false
---
