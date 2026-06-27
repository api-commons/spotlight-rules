---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-array-typed-items
title: Parameter Array Typed Items
severity: info
given: $..*.parameters[*]
message: "{{error}}"
description: Array parameters must have an items attribute with a type.
experience:
  - data-modeling
  - consistency
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-array-typed-items/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-array-typed-items' (Parameter Array Typed Items).
  Requirement: Array parameters must have an items attribute with a type. This
  rule is evaluated at the JSONPath `$..*.parameters[*]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-array-typed-items:
    title: Parameter Array Typed Items
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-array-typed-items/
    description: Array parameters must have an items attribute with a type.
    message: "{{error}}"
    severity: info
    given: $..*.parameters[*]
    then:
      function: digitalocean:ensureAllArraysHaveItemTypes
    tags:
      - format:openapi
      - spec:parameters
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-array-typed-items' (Parameter Array Typed Items).
      Requirement: Array parameters must have an items attribute with a type. This
      rule is evaluated at the JSONPath `$..*.parameters[*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
