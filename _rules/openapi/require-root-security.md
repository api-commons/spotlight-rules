---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-root-security
title: Require Root Security
severity: error
given: $
message: "{{description}}: {{error}}"
description: "The API contract MUST include a 'security' section at the root
  level. It requires the `security` field to be present and non-empty (evaluated
  at `$`). Severity: error."
experience:
  - security
  - governance
spec:
  - document
source:
  - adidas
builtin: false
---
