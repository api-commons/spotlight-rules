---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-security-2
title: Operation Require Security 2
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operations MUST Have a Security Definition
description: Each API operation should have a security definition referencing
  the central security scheme express for an OpenAPI.
experience:
  - security
  - governance
spec:
  - paths
  - operations
topic: []
owasp:
  - api5
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-security-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-security-2' (Operation Require Security 2).
  Requirement: Each API operation should have a security definition referencing
  the central security scheme express for an OpenAPI. To fix: Ensure `security`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.paths.*[get,post,patch,put,delete]` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-require-security-2:
    title: Operation Require Security 2
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-security-2/
    description: Each API operation should have a security definition referencing
      the central security scheme express for an OpenAPI.
    message: Operations MUST Have a Security Definition
    severity: info
    given: $.paths.*[get,post,patch,put,delete]
    then:
      field: security
      function: truthy
    tags:
      - owasp:api5
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:security
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-require-security-2' (Operation Require Security
      2). Requirement: Each API operation should have a security definition
      referencing the central security scheme express for an OpenAPI. To fix:
      Ensure `security` is present and non-empty at each matching location. This
      rule is evaluated at the JSONPath `$.paths.*[get,post,patch,put,delete]` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
