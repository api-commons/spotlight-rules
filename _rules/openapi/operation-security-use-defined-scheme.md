---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-security-use-defined-scheme
title: Operation Security Use Defined Scheme
severity: info
given: $.paths[*][*]..security.*
message: Check operation security uses a defined security scheme.
description: Check operation security uses a defined security scheme.
experience:
  - security
  - consistency
spec:
  - security
  - paths
topic: []
owasp:
  - api5
reference: https://spotlight-rules.com/spec/rules/openapi/operation-security-use-defined-scheme/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-security-use-defined-scheme' (Operation Security
  Use Defined Scheme). Requirement: Check operation security uses a defined
  security scheme. To fix: Adjust the targeted value so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.paths[*][*]..security.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  operation-security-use-defined-scheme:
    title: Operation Security Use Defined Scheme
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-security-use-defined-scheme/
    description: Check operation security uses a defined security scheme.
    message: Check operation security uses a defined security scheme.
    severity: info
    given: $.paths[*][*]..security.*
    then:
      function: schema
      functionOptions:
        schema:
          anyOf:
            - required:
                - bearer_auth
            - required:
                - inference_bearer_auth
    tags:
      - owasp:api5
      - format:openapi
      - spec:security
      - spec:paths
      - experience:security
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-security-use-defined-scheme' (Operation Security
      Use Defined Scheme). Requirement: Check operation security uses a defined
      security scheme. To fix: Adjust the targeted value so it conforms to the
      schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths[*][*]..security.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
