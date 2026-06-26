---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-json-media-type-2
title: Request Support JSON Media Type 2
severity: info
given: $.paths[*][*].requestBody.content
message: Every request MUST support `application/json` media type.
description: Every request MUST support `application/json` media type.
experience:
  - consistency
  - usability
spec:
  - paths
  - request-body
  - media-types
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-json-media-type-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-json-media-type-2' (Request Support JSON
  Media Type 2). Requirement: Every request MUST support `application/json`
  media type. To fix: Adjust the targeted value so it conforms to the schema
  this rule requires. This rule is evaluated at the JSONPath
  `$.paths[*][*].requestBody.content` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
