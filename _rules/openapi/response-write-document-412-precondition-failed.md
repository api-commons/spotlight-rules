---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-write-document-412-precondition-failed
title: Response Write Document 412 Precondition Failed
severity: info
given: $.paths[*][put,patch,delete].responses
message: Operation should document a `412` response.
description: Write operations should document a 412 Precondition Failed response
  for failed conditional (If-Match) writes.
experience:
  - reliability
  - usability
spec:
  - responses
topic:
  - conditional-requests
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-write-document-412-precondition-failed/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-write-document-412-precondition-failed' (Response
  Write Document 412 Precondition Failed). Requirement: Write operations should
  document a 412 Precondition Failed response for failed conditional (If-Match)
  writes. To fix: Ensure `412` is present and non-empty at each matching
  location. Guidance: Operation should document a `412` response. This rule is
  evaluated at the JSONPath `$.paths[*][put,patch,delete].responses` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
