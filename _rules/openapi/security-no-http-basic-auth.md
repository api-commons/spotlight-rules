---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-no-http-basic-auth
title: Security No HTTP Basic Auth
severity: info
given: $.components.securitySchemes[*]
message: HTTP Basic is an insecure way to pass credentials around, use an alternative.
description: Consider a more secure alternative to HTTP Basic.
experience:
  - security
spec:
  - security
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-no-http-basic-auth/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-no-http-basic-auth' (Security No HTTP Basic Auth).
  Requirement: Consider a more secure alternative to HTTP Basic. To fix: Ensure
  `scheme` does NOT match the regular expression `basic`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath
  `$.components.securitySchemes[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  security-no-http-basic-auth:
    title: Security No HTTP Basic Auth
    reference: https://spotlight-rules.com/spec/rules/openapi/security-no-http-basic-auth/
    description: Consider a more secure alternative to HTTP Basic.
    message: HTTP Basic is an insecure way to pass credentials around, use an alternative.
    severity: info
    given: $.components.securitySchemes[*]
    then:
      field: scheme
      function: pattern
      functionOptions:
        notMatch: basic
    tags:
      - owasp:api2
      - format:openapi
      - spec:security
      - spec:components
      - experience:security
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-no-http-basic-auth' (Security No HTTP Basic Auth).
      Requirement: Consider a more secure alternative to HTTP Basic. To fix:
      Ensure `scheme` does NOT match the regular expression `basic`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.components.securitySchemes[*]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
