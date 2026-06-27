---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-keys-snake-case
title: Parameter Keys Snake Case
severity: info
given: $.components['parameters'].*~
message: "{{error}}"
description: parameter key must be snake cased (e.g. snake_case).
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-keys-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-keys-snake-case' (Parameter Keys Snake Case).
  Requirement: parameter key must be snake cased (e.g. snake_case). This rule is
  evaluated at the JSONPath `$.components['parameters'].*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-keys-snake-case:
    title: Parameter Keys Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-keys-snake-case/
    description: parameter key must be snake cased (e.g. snake_case).
    message: "{{error}}"
    severity: info
    given: $.components['parameters'].*~
    then:
      function: digitalocean:ensureSnakeCaseWithDigits
    tags:
      - format:openapi
      - spec:parameters
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-keys-snake-case' (Parameter Keys Snake Case).
      Requirement: parameter key must be snake cased (e.g. snake_case). This rule
      is evaluated at the JSONPath `$.components['parameters'].*~` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
