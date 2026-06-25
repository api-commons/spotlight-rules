---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: delete-must-not-return-body
title: Delete Must Not Return Body
severity: error
given: $.paths.*.delete.responses[202,204].content
message: ""
description: "DELETE operations must not have a response body. It requires the
  targeted value to be absent or empty (evaluated at
  `$.paths.*.delete.responses[202,204].content`). Severity: error."
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
