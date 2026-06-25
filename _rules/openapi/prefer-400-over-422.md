---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: prefer-400-over-422
title: Prefer 400 Over 422
severity: warn
given: $.paths.*.*.responses.422
message: Prefer 400 over 422 as response code
description: "MUST use standard HTTP status codes [150a]. It requires the `422`
  field to be defined (evaluated at `$.paths.*.*.responses.422`). Severity:
  warn."
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
source:
  - baloise
builtin: false
---
