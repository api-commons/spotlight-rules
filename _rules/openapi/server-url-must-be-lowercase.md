---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-must-be-lowercase
title: Server URL Must Be Lowercase
severity: info
given: $.servers..url
message: Server URL SHOULD BE lowercase.
description: Server URL SHOULD BE lowercase.
experience:
  - naming
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-url-must-be-lowercase/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-url-must-be-lowercase' (Server URL Must Be Lowercase).
  Requirement: Server URL SHOULD BE lowercase. To fix: Ensure the targeted value
  matches the regular expression `^[^A-Z]*$`; rewrite any value that does not.
  This rule is evaluated at the JSONPath `$.servers..url` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  server-url-must-be-lowercase:
    title: Server URL Must Be Lowercase
    reference: https://spotlight-rules.com/spec/rules/openapi/server-url-must-be-lowercase/
    description: Server URL SHOULD BE lowercase.
    message: Server URL SHOULD BE lowercase.
    severity: info
    given: $.servers..url
    then:
      function: pattern
      functionOptions:
        match: ^[^A-Z]*$
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:servers
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'server-url-must-be-lowercase' (Server URL Must Be
      Lowercase). Requirement: Server URL SHOULD BE lowercase. To fix: Ensure the
      targeted value matches the regular expression `^[^A-Z]*$`; rewrite any value
      that does not. This rule is evaluated at the JSONPath `$.servers..url` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
