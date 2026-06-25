---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-include-ratelimit-headers
title: Responses Include Ratelimit Headers
severity: error
given: $..responses.*
message: "{{description}}; missing {{property}}"
description: "Response must include ratelimit-x headers. It requires the
  `headers.ratelimit-limit` field to be present and non-empty, and requires the
  `headers.ratelimit-remaining` field to be present and non-empty, and requires
  the `headers.ratelimit-reset` field to be present and non-empty (evaluated at
  `$..responses.*`). Severity: error."
experience:
  - reliability
  - documentation
spec:
  - responses
source:
  - digitalocean
builtin: false
---
