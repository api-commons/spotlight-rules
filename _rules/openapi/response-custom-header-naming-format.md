---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-custom-header-naming-format
title: Response Custom Header Naming Format
severity: info
given: $.paths[*][*].responses[*].headers.*~
message: Custom headers MUST NOT be longer than 50 chars, and MUST only contain
  alphanumeric and dash chars, and MUST begin with Sps- not X-.
description: Custom headers MUST NOT be longer than 50 chars, and MUST only
  contain alphanumeric and dash chars, and MUST begin with Sps- not X-.
experience:
  - naming
  - consistency
spec:
  - paths
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-custom-header-naming-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-custom-header-naming-format' (Response Custom Header
  Naming Format). Requirement: Custom headers MUST NOT be longer than 50 chars,
  and MUST only contain alphanumeric and dash chars, and MUST begin with Sps-
  not X-. To fix: Ensure the targeted value matches the regular expression
  `^(Sps-[a-zA-Z0-9-]{1,50}|Accept|Access-Control.*|Authorization|Cache-Control\
  |Content-Disposition|Content-Language|Content-Length|Content-Type|Date|ETag|H\
  ost|If-Match|If-None-Match|Location|Origin|User-Agent)$`; rewrite any value
  that does not. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].headers.*~` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
