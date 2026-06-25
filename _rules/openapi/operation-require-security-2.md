---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-security-2
title: Operation Require Security 2
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: Operations MUST Have a Security Definition
description: "Each API operation should have a security definition referencing
  the central security scheme express for an OpenAPI. It requires the `security`
  field to be present and non-empty (evaluated at
  `$.paths.*[get,post,patch,put,delete]`). Severity: error."
experience:
  - security
  - governance
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
