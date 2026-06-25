---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: head-must-not-return-body
title: Head Must Not Return Body
severity: error
given: $.paths.*.head.responses[200].content
message: ""
description: "HEAD operations should not return a response body for success. It
  requires the targeted value to be absent or empty (evaluated at
  `$.paths.*.head.responses[200].content`). Severity: error."
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
