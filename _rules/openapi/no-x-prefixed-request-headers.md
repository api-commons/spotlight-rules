---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-x-prefixed-request-headers
title: No X Prefixed Request Headers
severity: warn
given: $..parameters.[?(@.in === 'header')].name
message: "Headers cannot start with X-. More: https://tools.ietf.org/html/rfc6648"
description: "Do not use headers with X-. It requires the targeted value not to
  match `^(x|X)-` (evaluated at `$..parameters.[?(@.in === 'header')].name`).
  Severity: warn."
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
source:
  - sps-commerce
builtin: false
---
