---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-bearer-scheme-require-bearer-format
title: Security Bearer Scheme Require Bearer Format
severity: info
given: $.components.securitySchemes[?(@ && @.type == 'http' && @.scheme == 'bearer')]
message: HTTP bearer scheme should declare a bearerFormat (e.g. JWT).
description: HTTP bearer security schemes should declare a bearerFormat (e.g.
  JWT) so consumers know the token type and tooling can validate it.
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-bearer-scheme-require-bearer-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-bearer-scheme-require-bearer-format' (Security
  Bearer Scheme Require Bearer Format). Requirement: HTTP bearer security
  schemes should declare a bearerFormat (e.g. JWT) so consumers know the token
  type and tooling can validate it. To fix: Ensure `bearerFormat` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.components.securitySchemes[?(@ && @.type == 'http' && @.scheme ==
  'bearer')]` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  security-bearer-scheme-require-bearer-format:
    title: Security Bearer Scheme Require Bearer Format
    reference: https://spotlight-rules.com/spec/rules/openapi/security-bearer-scheme-require-bearer-format/
    description: HTTP bearer security schemes should declare a bearerFormat (e.g.
      JWT) so consumers know the token type and tooling can validate it.
    message: HTTP bearer scheme should declare a bearerFormat (e.g. JWT).
    given: $.components.securitySchemes[?(@ && @.type == 'http' && @.scheme ==
      'bearer')]
    severity: info
    then:
      field: bearerFormat
      function: truthy
    tags:
      - format:openapi
      - spec:components
      - experience:security
      - owasp:api2
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-bearer-scheme-require-bearer-format' (Security
      Bearer Scheme Require Bearer Format). Requirement: HTTP bearer security
      schemes should declare a bearerFormat (e.g. JWT) so consumers know the token
      type and tooling can validate it. To fix: Ensure `bearerFormat` is present
      and non-empty at each matching location. This rule is evaluated at the
      JSONPath `$.components.securitySchemes[?(@ && @.type == 'http' && @.scheme
      == 'bearer')]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
