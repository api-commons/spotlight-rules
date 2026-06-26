---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-get-link-header
title: Response Get Link Header
severity: info
given: $.paths[*].get.responses[?( @property >= 200 && @property < 300 &&
  @property != 204 )].headers
message: GET responses should provide a Link header (RFC 8288) for
  pagination/navigation.
description: GET success responses should provide a Link header (RFC 8288) with
  rel next/prev/first/last for pagination and navigation — the header-based
  alternative to an in-body paging object.
experience:
  - pagination
  - discoverability
  - usability
  - performance
spec:
  - responses
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-get-link-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-get-link-header' (Response Get Link Header).
  Requirement: GET success responses should provide a Link header (RFC 8288)
  with rel next/prev/first/last for pagination and navigation — the header-based
  alternative to an in-body paging object. To fix: Ensure `Link` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.paths[*].get.responses[?( @property >= 200 && @property < 300 && @property
  != 204 )].headers` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
