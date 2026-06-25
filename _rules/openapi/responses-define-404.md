---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-define-404
title: Responses Define 404
severity: error
given: $.paths[?(@property.match(/.*\/{.*}.*/))]..responses
message: "{{description}}. Missing {{property}}"
description: "Responses should contain common response - 404 (not found). It
  requires the `404` field to be present and non-empty (evaluated at
  `$.paths[?(@property.match(/.*\\/{.*}.*/))]..responses`). Severity: error."
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
