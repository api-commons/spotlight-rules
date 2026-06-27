---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-include-ratelimit-header
title: Response Include Ratelimit Header
severity: info
given: $..responses.*
message: "{{description}}; missing {{property}}"
description: Response must include ratelimit-x headers.
experience:
  - reliability
  - documentation
  - performance
spec:
  - responses
topic:
  - rate-limiting
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/response-include-ratelimit-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-include-ratelimit-header' (Response Include
  Ratelimit Header). Requirement: Response must include ratelimit-x headers. To
  fix: Ensure `headers.ratelimit-limit` is present and non-empty at each
  matching location. Also: Ensure `headers.ratelimit-remaining` is present and
  non-empty at each matching location. Also: Ensure `headers.ratelimit-reset` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$..responses.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  response-include-ratelimit-header:
    title: Response Include Ratelimit Header
    reference: https://spotlight-rules.com/spec/rules/openapi/response-include-ratelimit-header/
    description: Response must include ratelimit-x headers.
    message: "{{description}}; missing {{property}}"
    severity: info
    given: $..responses.*
    then:
      - field: headers.ratelimit-limit
        function: truthy
      - field: headers.ratelimit-remaining
        function: truthy
      - field: headers.ratelimit-reset
        function: truthy
    tags:
      - format:openapi
      - spec:responses
      - topic:rate-limiting
      - experience:reliability
      - experience:documentation
      - experience:performance
      - owasp:api4
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-include-ratelimit-header' (Response Include
      Ratelimit Header). Requirement: Response must include ratelimit-x headers.
      To fix: Ensure `headers.ratelimit-limit` is present and non-empty at each
      matching location. Also: Ensure `headers.ratelimit-remaining` is present and
      non-empty at each matching location. Also: Ensure `headers.ratelimit-reset`
      is present and non-empty at each matching location. This rule is evaluated
      at the JSONPath `$..responses.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
