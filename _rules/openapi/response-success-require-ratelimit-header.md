---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-success-require-ratelimit-header
title: Response Success Require Ratelimit Header
severity: info
given: $.[responses][?(@property[0] == "2" )][headers]
message: Missing ratelimit headers. {{property}} {{error}} {{path}}
description: "Ratelimiting API preserves a service and limits attack scenario
  [see API4:2019 Lack of Resources & Rate
  Limiting](https://owasp.org/www-project-api-security). APIs should use the
  following headers at least on successful responses: - `X-RateLimit-Limit`:
  number of total requests in a give time window - `X-RateLimit-Remaining`:
  remaining requests in the current window - `X-RateLimit-Reset`: number of
  seconds before the window resets An example set of headers is the following
  ``` X-Ratelimit-Limit: 100 X-Ratelimit-Remaining: 40 X-Ratelimit-Reset: 12 ```
  A standardization proposal for ratelimit headers is ongoning inside the IETF
  HTTPAPI Workgroup. See [the
  draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/\
  )."
experience:
  - reliability
  - security
  - performance
spec:
  - responses
  - headers
topic:
  - rate-limiting
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/response-success-require-ratelimit-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-success-require-ratelimit-header' (Response Success
  Require Ratelimit Header). Requirement: Ratelimiting API preserves a service
  and limits attack scenario [see API4:2019 Lack of Resources & Rate
  Limiting](https://owasp.org/www-project-api-security). APIs should use the
  following headers at least on successful responses: - `X-RateLimit-Limit`:
  number of total requests in a give time window - `X-RateLimit-Remaining`:
  remaining requests in the current window - `X-RateLimit-Reset`: number of
  seconds before the window resets An example set of headers is the following
  ``` X-Ratelimit-Limit: 100 X-Ratelimit-Remaining: 40 X-Ratelimit-Reset: 12 ```
  A standardization proposal for ratelimit headers is ongoning inside the IETF
  HTTPAPI Workgroup. See [the
  draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/\
  ). To fix: Include exactly one of: X-RateLimit-Limit, RateLimit-Limit. Also:
  Include exactly one of: X-RateLimit-Remaining, RateLimit-Remaining. Also:
  Include exactly one of: X-RateLimit-Reset, RateLimit-Reset. This rule is
  evaluated at the JSONPath `$.[responses][?(@property[0] == \"2\" )][headers]`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-success-require-ratelimit-header:
    title: Response Success Require Ratelimit Header
    reference: https://spotlight-rules.com/spec/rules/openapi/response-success-require-ratelimit-header/
    description: "Ratelimiting API preserves a service and limits attack scenario
      [see API4:2019 Lack of Resources & Rate
      Limiting](https://owasp.org/www-project-api-security). APIs should use the
      following headers at least on successful responses: - `X-RateLimit-Limit`:
      number of total requests in a give time window - `X-RateLimit-Remaining`:
      remaining requests in the current window - `X-RateLimit-Reset`: number of
      seconds before the window resets An example set of headers is the following
      ``` X-Ratelimit-Limit: 100 X-Ratelimit-Remaining: 40 X-Ratelimit-Reset: 12
      ``` A standardization proposal for ratelimit headers is ongoning inside the
      IETF HTTPAPI Workgroup. See [the
      draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-header\
      s/)."
    message: Missing ratelimit headers. {{property}} {{error}} {{path}}
    severity: info
    given: $.[responses][?(@property[0] == "2" )][headers]
    then:
      - functionOptions:
          properties:
            - X-RateLimit-Limit
            - RateLimit-Limit
        function: xor
      - functionOptions:
          properties:
            - X-RateLimit-Remaining
            - RateLimit-Remaining
        function: xor
      - functionOptions:
          properties:
            - X-RateLimit-Reset
            - RateLimit-Reset
        function: xor
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:responses
      - spec:headers
      - topic:rate-limiting
      - experience:reliability
      - experience:security
      - experience:performance
      - owasp:api4
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-success-require-ratelimit-header' (Response
      Success Require Ratelimit Header). Requirement: Ratelimiting API preserves a
      service and limits attack scenario [see API4:2019 Lack of Resources & Rate
      Limiting](https://owasp.org/www-project-api-security). APIs should use the
      following headers at least on successful responses: - `X-RateLimit-Limit`:
      number of total requests in a give time window - `X-RateLimit-Remaining`:
      remaining requests in the current window - `X-RateLimit-Reset`: number of
      seconds before the window resets An example set of headers is the following
      ``` X-Ratelimit-Limit: 100 X-Ratelimit-Remaining: 40 X-Ratelimit-Reset: 12
      ``` A standardization proposal for ratelimit headers is ongoning inside the
      IETF HTTPAPI Workgroup. See [the
      draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-header\
      s/). To fix: Include exactly one of: X-RateLimit-Limit, RateLimit-Limit.
      Also: Include exactly one of: X-RateLimit-Remaining, RateLimit-Remaining.
      Also: Include exactly one of: X-RateLimit-Reset, RateLimit-Reset. This rule
      is evaluated at the JSONPath `$.[responses][?(@property[0] == \"2\"
      )][headers]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
