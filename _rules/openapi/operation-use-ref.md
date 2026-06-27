---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-use-ref
title: Operation Use Ref
severity: info
given: $.paths.*.*
message: "{{description}}; {{property}} incorrect"
description: Endpoint must be a $ref.
experience:
  - consistency
  - governance
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-use-ref/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-use-ref' (Operation Use Ref). Requirement: Endpoint
  must be a $ref. To fix: Ensure `$ref` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.paths.*.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-use-ref:
    title: Operation Use Ref
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-use-ref/
    description: Endpoint must be a $ref.
    message: "{{description}}; {{property}} incorrect"
    severity: info
    given: $.paths.*.*
    then:
      field: $ref
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-use-ref' (Operation Use Ref). Requirement:
      Endpoint must be a $ref. To fix: Ensure `$ref` is present and non-empty at
      each matching location. This rule is evaluated at the JSONPath `$.paths.*.*`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
