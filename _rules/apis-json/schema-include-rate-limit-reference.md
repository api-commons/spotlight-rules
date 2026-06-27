---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-rate-limit-reference
title: Schema Include Rate Limit Reference
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Terms of Services
description: This property ensures there is an API rate limits reference
  associated with API, ensuring the rate limits applied to an API are clearly
  communicated.
experience:
  - reliability
  - documentation
  - performance
spec:
  - apis
  - properties
topic:
  - rate-limiting
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-rate-limit-reference/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-rate-limit-reference' (Schema Include Rate
  Limit Reference). Requirement: This property ensures there is an API rate
  limits reference associated with API, ensuring the rate limits applied to an
  API are clearly communicated. To fix: Ensure `type` does NOT match the regular
  expression `\\b(rate-limits|RateLimits|Rate Limits)\\b`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$.apis.*.properties.*
  | $.common.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-rate-limit-reference:
    title: Schema Include Rate Limit Reference
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-rate-limit-reference/
    description: This property ensures there is an API rate limits reference
      associated with API, ensuring the rate limits applied to an API are clearly
      communicated.
    message: Has an API Terms of Services
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(rate-limits|RateLimits|Rate Limits)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - topic:rate-limiting
      - experience:reliability
      - experience:documentation
      - experience:performance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-rate-limit-reference' (Schema Include Rate
      Limit Reference). Requirement: This property ensures there is an API rate
      limits reference associated with API, ensuring the rate limits applied to an
      API are clearly communicated. To fix: Ensure `type` does NOT match the
      regular expression `\\b(rate-limits|RateLimits|Rate Limits)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
