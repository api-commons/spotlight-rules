---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-require-https
title: Server URL Require HTTPS
severity: error
given: $.servers[*]
message: Server URL MUST Use HTTPS
description: "API server URLs should use HTTPS to ensure encrypted communication
  between clients and servers, protecting sensitive data in transit. It requires
  the `url` field to match the pattern `^https://` (evaluated at
  `$.servers[*]`). Severity: error."
experience:
  - security
spec:
  - servers
source:
  - api-evangelist
builtin: false
---
