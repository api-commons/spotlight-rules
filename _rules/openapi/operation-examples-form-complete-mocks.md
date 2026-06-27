---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-examples-form-complete-mocks
title: Operation Examples Form Complete Mocks
severity: info
given: $.paths.*.*
message: "{{error}}"
description: Response example must match required params examples to form full mocks.
experience:
  - documentation
  - usability
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-examples-form-complete-mocks/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-examples-form-complete-mocks' (Operation Examples
  Form Complete Mocks). Requirement: Response example must match required params
  examples to form full mocks. This rule is evaluated at the JSONPath
  `$.paths.*.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  operation-examples-form-complete-mocks:
    title: Operation Examples Form Complete Mocks
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-examples-form-complete-mocks/
    description: Response example must match required params examples to form full mocks.
    message: "{{error}}"
    severity: info
    given: $.paths.*.*
    then:
      function: microcks:oas-verify-mocks
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-examples-form-complete-mocks' (Operation Examples
      Form Complete Mocks). Requirement: Response example must match required
      params examples to form full mocks. This rule is evaluated at the JSONPath
      `$.paths.*.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
