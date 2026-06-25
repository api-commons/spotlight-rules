---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-define-401
title: Responses Define 401
severity: error
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: "Responses should contain common response - 401 (unauthorized). It
  requires the `401` field to be present and non-empty (evaluated at
  `$.paths..responses`). Severity: error."
experience:
  - error-handling
  - documentation
spec:
  - paths
  - responses
source:
  - digitalocean
builtin: false
---
