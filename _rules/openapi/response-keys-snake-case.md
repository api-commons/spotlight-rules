---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-keys-snake-case
title: Response Keys Snake Case
severity: info
given: $.components['responses'].*~
message: "{{error}}"
description: response key must be snake cased (e.g. snake_case).
experience:
  - naming
  - consistency
spec:
  - responses
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-keys-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-keys-snake-case' (Response Keys Snake Case).
  Requirement: response key must be snake cased (e.g. snake_case). This rule is
  evaluated at the JSONPath `$.components['responses'].*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-keys-snake-case:
    title: Response Keys Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/response-keys-snake-case/
    description: response key must be snake cased (e.g. snake_case).
    message: "{{error}}"
    severity: info
    given: $.components['responses'].*~
    then:
      function: digitalocean:ensureSnakeCaseWithDigits
    tags:
      - format:openapi
      - spec:responses
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-keys-snake-case' (Response Keys Snake Case).
      Requirement: response key must be snake cased (e.g. snake_case). This rule
      is evaluated at the JSONPath `$.components['responses'].*~` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
