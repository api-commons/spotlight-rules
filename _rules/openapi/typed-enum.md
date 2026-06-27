---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: typed-enum
title: Typed Enum
severity: info
given: $..[?(@ && @.enum && @.type)]
message: "{{error}}"
description: Enum values must respect the specified type.
experience:
  - data-modeling
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/typed-enum/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'typed-enum' (Typed Enum). Requirement: Enum values must
  respect the specified type. To fix: Make every enum value match the declared
  type. This rule is evaluated at the JSONPath `$..[?(@ && @.enum && @.type)]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  typed-enum:
    title: Typed Enum
    reference: https://spotlight-rules.com/spec/rules/openapi/typed-enum/
    description: Enum values must respect the specified type.
    message: "{{error}}"
    severity: info
    given: $..[?(@ && @.enum && @.type)]
    then:
      function: typedEnum
    tags:
      - format:openapi
      - spec:document
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'typed-enum' (Typed Enum). Requirement: Enum values must
      respect the specified type. To fix: Make every enum value match the declared
      type. This rule is evaluated at the JSONPath `$..[?(@ && @.enum && @.type)]`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
