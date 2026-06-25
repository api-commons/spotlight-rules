---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-properties-camel-case
title: Schema Properties Camel Case
severity: error
given: $.definitions..properties[*]~
message: "{{property}} MUST follow camelCase and be ASCII alphanumeric
  characters or `_` or `$`."
description: "All JSON Schema properties MUST follow fields-camelCase and be
  ASCII alphanumeric characters or `_` or `$`. It requires the targeted value to
  match the pattern `/^[a-z$_]{1}[A-Z09$_]*/` (evaluated at
  `$.definitions..properties[*]~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - adidas
builtin: false
---
