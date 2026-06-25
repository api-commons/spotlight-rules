---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-define-500
title: Responses Define 500
severity: error
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: "Responses should contain common response - 500 (server error). It
  requires the `500` field to be present and non-empty (evaluated at
  `$.paths..responses`). Severity: error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - responses
source:
  - digitalocean
builtin: false
---
