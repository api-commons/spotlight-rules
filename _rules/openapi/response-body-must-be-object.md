---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-body-must-be-object
title: Response Body Must Be Object
severity: info
given: $.paths[*][*].responses[*].content.application/json.schema.type
message: Response bodies must be an object type.
description: Response bodies must be an object type.
experience:
  - data-modeling
  - consistency
spec:
  - paths
  - responses
  - media-types
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-body-must-be-object/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-body-must-be-object' (Response Body Must Be Object).
  Requirement: Response bodies must be an object type. To fix: Ensure the
  targeted value matches the regular expression `object`; rewrite any value that
  does not. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].content.application/json.schema.type` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
