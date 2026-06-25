---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-definitions-camel-case
title: Schema Definitions Camel Case
severity: error
given: $.definitions[*]~
message: "{{property}} MUST follow camelCase and be ASCII alphanumeric
  characters or `_` or `$`."
description: "All YAML/JSON definitions MUST follow fields-camelCase and be
  ASCII alphanumeric characters or `_` or `$`. It requires the targeted value to
  match the pattern `/^[a-z$_]{1}[A-Z09$_]*/` (evaluated at
  `$.definitions[*]~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - document
source:
  - adidas
builtin: false
---
