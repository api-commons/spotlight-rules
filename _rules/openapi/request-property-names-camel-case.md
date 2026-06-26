---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-property-names-camel-case
title: Request Property Names Camel Case
severity: info
given: $.paths.*.*[responses,requestBody]..content..schema..properties.*~
message: Property name has to be ASCII camelCase
description: MUST property names must be ASCII camelCase [118a].
experience:
  - naming
  - consistency
spec:
  - paths
  - request-body
  - responses
  - media-types
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-property-names-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-property-names-camel-case' (Request Property Names
  Camel Case). Requirement: MUST property names must be ASCII camelCase [118a].
  To fix: Ensure the targeted value matches the regular expression
  `^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$`; rewrite any value that does
  not. This rule is evaluated at the JSONPath
  `$.paths.*.*[responses,requestBody]..content..schema..properties.*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
