---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-use-json-api
title: Response Use JSON API
severity: info
given: $.paths..responses[?( @property >= 200 && @property < 600 && @property !=
  204)].content[*]~
message: "Response documents MUST use the application/vnd.api+json (JSON:API)
  media type: {{error}}"
description: All responses MUST use the JSON:API `application/vnd.api+json` media type.
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-use-json-api/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-use-json-api' (Response Use JSON API). Requirement:
  All responses MUST use the JSON:API `application/vnd.api+json` media type. To
  fix: Set the targeted value to one of the allowed values:
  application/vnd.api+json. This rule is evaluated at the JSONPath
  `$.paths..responses[?( @property >= 200 && @property < 600 && @property !=
  204)].content[*]~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
