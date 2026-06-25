---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-security-schemes
title: Require Security Schemes
severity: error
given: $.components
message: "{{description}}: {{error}}"
description: "The API contract MUST include a 'securitySchemes' subsection under
  the 'components' section. It requires the `securitySchemes` field to be
  present and non-empty (evaluated at `$.components`). Severity: error."
experience:
  - security
  - governance
spec:
  - components
source:
  - adidas
  - api-evangelist
builtin: false
---
