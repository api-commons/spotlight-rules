---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-accept-encoding
title: Request Support Accept Encoding
severity: info
given: $.paths[*][get,post,put,patch,delete]
message: Operation should accept an Accept-Encoding header.
description: Operations should accept an Accept-Encoding request header so
  clients can negotiate a compressed (e.g. gzip) response.
experience:
  - usability
  - reliability
  - performance
spec:
  - parameters
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-accept-encoding/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-accept-encoding' (Request Support Accept
  Encoding). Requirement: Operations should accept an Accept-Encoding request
  header so clients can negotiate a compressed (e.g. gzip) response. To fix:
  Adjust `parameters` so it conforms to the schema this rule requires. This rule
  is evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
