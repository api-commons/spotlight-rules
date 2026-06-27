---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-must-use-https
title: Server Must Use HTTPS
severity: info
given: $.servers..url
message: Servers MUST be https and no other protocol is allowed unless using localhost.
description: Servers MUST be https and no other protocol is allowed unless using localhost.
experience:
  - security
  - reliability
spec:
  - servers
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/server-must-use-https/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-must-use-https' (Server Must Use HTTPS). Requirement:
  Servers MUST be https and no other protocol is allowed unless using localhost.
  To fix: Ensure the targeted value matches the regular expression
  `^(https:|http://localhost)`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.servers..url` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  server-must-use-https:
    title: Server Must Use HTTPS
    reference: https://spotlight-rules.com/spec/rules/openapi/server-must-use-https/
    description: Servers MUST be https and no other protocol is allowed unless using
      localhost.
    message: Servers MUST be https and no other protocol is allowed unless using
      localhost.
    severity: info
    given: $.servers..url
    then:
      function: pattern
      functionOptions:
        match: ^(https:|http://localhost)
    formats:
      - oas3
    tags:
      - owasp:api8
      - format:openapi
      - spec:servers
      - experience:security
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'server-must-use-https' (Server Must Use HTTPS).
      Requirement: Servers MUST be https and no other protocol is allowed unless
      using localhost. To fix: Ensure the targeted value matches the regular
      expression `^(https:|http://localhost)`; rewrite any value that does not.
      This rule is evaluated at the JSONPath `$.servers..url` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
