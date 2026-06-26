---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-string-require-max-length
title: Parameter String Require Max Length
severity: info
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type String MaxLength
description: Parameters that are of the string schema type must have their
  maximum value set, defining the shape of parameter data passed in with a
  request.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-string-require-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-string-require-max-length' (Parameter String
  Require Max Length). Requirement: Parameters that are of the string schema
  type must have their maximum value set, defining the shape of parameter data
  passed in with a request. To fix: Ensure `maxLength` is present and non-empty
  at each matching location. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
