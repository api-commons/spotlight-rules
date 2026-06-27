---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-operation-security
title: Asyncapi 3 Operation Security
severity: info
given: $.operations.*.security.*
message: "{{error}}"
description: Operation have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - security
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-operation-security/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-operation-security' (Asyncapi 3 Operation
  Security). Requirement: Operation have to reference a defined security
  schemes. This rule is evaluated at the JSONPath `$.operations.*.security.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-3-operation-security:
    title: Asyncapi 3 Operation Security
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-operation-security/
    description: Operation have to reference a defined security schemes.
    message: "{{error}}"
    severity: info
    given: $.operations.*.security.*
    then:
      function: asyncApiSecurity
      functionOptions:
        objectType: Operation
    tags:
      - format:asyncapi
      - spec:security
      - experience:security
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-operation-security' (Asyncapi 3 Operation
      Security). Requirement: Operation have to reference a defined security
      schemes. This rule is evaluated at the JSONPath `$.operations.*.security.*`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid AsyncAPI. Return only the complete corrected document, with
      no commentary."
---
