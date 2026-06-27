---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: component-example-keys-snake-case
title: Component Example Keys Snake Case
severity: info
given: $.components['examples'].*~
message: "{{error}}"
description: example key must be snake cased (e.g. snake_case).
experience:
  - naming
  - consistency
spec:
  - components
  - examples
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/component-example-keys-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'component-example-keys-snake-case' (Component Example Keys
  Snake Case). Requirement: example key must be snake cased (e.g. snake_case).
  This rule is evaluated at the JSONPath `$.components['examples'].*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-example-keys-snake-case:
    title: Component Example Keys Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/component-example-keys-snake-case/
    description: example key must be snake cased (e.g. snake_case).
    message: "{{error}}"
    severity: info
    given: $.components['examples'].*~
    then:
      function: digitalocean:ensureSnakeCaseWithDigits
    tags:
      - format:openapi
      - spec:components
      - spec:examples
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'component-example-keys-snake-case' (Component Example Keys
      Snake Case). Requirement: example key must be snake cased (e.g. snake_case).
      This rule is evaluated at the JSONPath `$.components['examples'].*~` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
