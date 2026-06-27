---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-default-content-language-en-us
title: Response Default Content Language En Us
severity: info
given: $.paths[*][*].responses[*].headers.Content-Language.schema.default
message: Content-Language is optional but MUST default locale to en-US when none
  provided.
description: Content-Language is optional but MUST default locale to en-US when
  none provided.
experience:
  - consistency
  - usability
spec:
  - paths
  - responses
  - headers
  - media-types
  - schemas
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-default-content-language-en-us/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-default-content-language-en-us' (Response Default
  Content Language En Us). Requirement: Content-Language is optional but MUST
  default locale to en-US when none provided. To fix: Ensure the targeted value
  matches the regular expression `en-US`; rewrite any value that does not. This
  rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].headers.Content-Language.schema.default` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-default-content-language-en-us:
    title: Response Default Content Language En Us
    reference: https://spotlight-rules.com/spec/rules/openapi/response-default-content-language-en-us/
    description: Content-Language is optional but MUST default locale to en-US when
      none provided.
    message: Content-Language is optional but MUST default locale to en-US when none
      provided.
    severity: info
    given: $.paths[*][*].responses[*].headers.Content-Language.schema.default
    then:
      function: pattern
      functionOptions:
        match: en-US
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:headers
      - spec:media-types
      - spec:schemas
      - topic:content-negotiation
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-default-content-language-en-us' (Response Default
      Content Language En Us). Requirement: Content-Language is optional but MUST
      default locale to en-US when none provided. To fix: Ensure the targeted
      value matches the regular expression `en-US`; rewrite any value that does
      not. This rule is evaluated at the JSONPath
      `$.paths[*][*].responses[*].headers.Content-Language.schema.default` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
