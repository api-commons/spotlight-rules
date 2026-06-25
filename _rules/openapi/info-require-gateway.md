---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-gateway
title: Info Require Gateway
severity: warn
given: $.info
message: "{{description}}: {{error}}"
description: "The API contract SHOULD include a custom field 'x-gateway' in the
  'info' section. It requires the `x-gateway` field to be present and non-empty
  (evaluated at `$.info`). Severity: warn."
experience:
  - governance
spec:
  - info
source:
  - adidas
builtin: false
---
