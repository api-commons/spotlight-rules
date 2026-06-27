---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-ratelimit-policy
title: Response Ratelimit Policy
severity: info
given: $..responses.*
message: Responses should define a `RateLimit-Policy` header.
description: Responses should define a RateLimit-Policy header documenting the
  quota policy and window (e.g. 100;w=60), so clients understand the limits in
  effect.
experience:
  - reliability
  - usability
  - performance
spec:
  - responses
topic:
  - rate-limiting
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-ratelimit-policy/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-ratelimit-policy' (Response Ratelimit Policy).
  Requirement: Responses should define a RateLimit-Policy header documenting the
  quota policy and window (e.g. 100;w=60), so clients understand the limits in
  effect. To fix: Ensure `headers.RateLimit-Policy` is present and non-empty at
  each matching location. Guidance: Responses should define a `RateLimit-Policy`
  header. This rule is evaluated at the JSONPath `$..responses.*` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-ratelimit-policy:
    title: Response Ratelimit Policy
    reference: https://spotlight-rules.com/spec/rules/openapi/response-ratelimit-policy/
    description: Responses should define a RateLimit-Policy header documenting the
      quota policy and window (e.g. 100;w=60), so clients understand the limits in
      effect.
    message: Responses should define a `RateLimit-Policy` header.
    given: $..responses.*
    severity: info
    then:
      field: headers.RateLimit-Policy
      function: truthy
    tags:
      - format:openapi
      - spec:responses
      - topic:rate-limiting
      - experience:reliability
      - experience:usability
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-ratelimit-policy' (Response Ratelimit Policy).
      Requirement: Responses should define a RateLimit-Policy header documenting
      the quota policy and window (e.g. 100;w=60), so clients understand the
      limits in effect. To fix: Ensure `headers.RateLimit-Policy` is present and
      non-empty at each matching location. Guidance: Responses should define a
      `RateLimit-Policy` header. This rule is evaluated at the JSONPath
      `$..responses.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
