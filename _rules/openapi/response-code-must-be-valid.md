---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-code-must-be-valid
title: Response Code Must Be Valid
severity: warn
given: $..responses
message: "{{error}}"
description: "All APIs should return a valid http response code. It applies a
  custom validation to the `@key` field (evaluated at `$..responses`). Severity:
  warn."
experience:
  - error-handling
  - consistency
spec:
  - responses
source:
  - trimble
builtin: false
---
