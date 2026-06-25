---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-well-understood-status-codes
title: Operation Well Understood Status Codes
severity: warn
given: $.paths.*
message: "{{error}}"
description: "MUST use standard HTTP status codes [150]. It applies a custom
  validation to the targeted value (evaluated at `$.paths.*`). Severity: warn."
experience:
  - error-handling
  - consistency
spec:
  - paths
source:
  - baloise
builtin: false
---
