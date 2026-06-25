---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-x-prefixed-response-headers
title: No X Prefixed Response Headers
severity: warn
given: $..headers.*~
message: "Headers cannot start with X-, so please find a new name for
  {{property}}. More: https://tools.ietf.org/html/rfc6648"
description: "Do not use headers with X-. It requires the targeted value not to
  match `^(x|X)-` (evaluated at `$..headers.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - headers
source:
  - sps-commerce
builtin: false
---
