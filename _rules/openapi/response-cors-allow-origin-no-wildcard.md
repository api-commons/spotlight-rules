---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-cors-allow-origin-no-wildcard
title: Response CORS Allow Origin No Wildcard
severity: info
given: $..responses.*.headers['Access-Control-Allow-Origin'].schema
message: Access-Control-Allow-Origin should not be a wildcard (*).
description: "If an Access-Control-Allow-Origin response header is documented,
  it should not hard-code a wildcard (*) — reflect specific allowed origins
  instead, especially for authenticated APIs (OWASP API8 security
  misconfiguration). Note: the project treats CORS as operational (see
  no-operational-headers-in-spec); this is a defensive check for specs that do
  document it."
experience:
  - security
spec:
  - responses
topic:
  - cors
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/response-cors-allow-origin-no-wildcard/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-cors-allow-origin-no-wildcard' (Response CORS Allow
  Origin No Wildcard). Requirement: If an Access-Control-Allow-Origin response
  header is documented, it should not hard-code a wildcard (*) — reflect
  specific allowed origins instead, especially for authenticated APIs (OWASP
  API8 security misconfiguration). Note: the project treats CORS as operational
  (see no-operational-headers-in-spec); this is a defensive check for specs that
  do document it. To fix: Adjust the targeted value so it conforms to the schema
  this rule requires. This rule is evaluated at the JSONPath
  `$..responses.*.headers['Access-Control-Allow-Origin'].schema` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
