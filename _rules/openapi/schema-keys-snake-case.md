---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-keys-snake-case
title: Schema Keys Snake Case
severity: info
given: $.components['schemas'].*~
message: "{{error}}"
description: schema key must be snake cased (e.g. snake_case).
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-keys-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-keys-snake-case' (Schema Keys Snake Case).
  Requirement: schema key must be snake cased (e.g. snake_case). This rule is
  evaluated at the JSONPath `$.components['schemas'].*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-keys-snake-case:
    title: Schema Keys Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-keys-snake-case/
    description: schema key must be snake cased (e.g. snake_case).
    message: "{{error}}"
    severity: info
    given: $.components['schemas'].*~
    then:
      function: digitalocean:ensureSnakeCaseWithDigits
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-keys-snake-case' (Schema Keys Snake Case).
      Requirement: schema key must be snake cased (e.g. snake_case). This rule is
      evaluated at the JSONPath `$.components['schemas'].*~` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
