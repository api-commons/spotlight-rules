---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-write-etag
title: Response Write ETag
severity: info
given: $.paths[*][post,put,patch].responses[?( @property >= 200 && @property <
  300 && @property != 204 )].headers
message: Write success responses should define a `ETag` header.
description: Write success responses (POST/PUT/PATCH) should define an ETag
  header so clients receive the new entity tag after a write and can make
  subsequent conditional requests.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - caching
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-write-etag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-write-etag' (Response Write ETag). Requirement:
  Write success responses (POST/PUT/PATCH) should define an ETag header so
  clients receive the new entity tag after a write and can make subsequent
  conditional requests. To fix: Ensure `ETag` is present and non-empty at each
  matching location. Guidance: Write success responses should define a `ETag`
  header. This rule is evaluated at the JSONPath
  `$.paths[*][post,put,patch].responses[?( @property >= 200 && @property < 300
  && @property != 204 )].headers` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
