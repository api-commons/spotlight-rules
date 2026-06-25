---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-define-429
title: Responses Define 429
severity: error
given: $.paths..responses
message: "{{description}}. Missing {{property}}"
description: "Responses should contain common response - 429 (too many
  requests). It requires the `429` field to be present and non-empty (evaluated
  at `$.paths..responses`). Severity: error."
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
