---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-headers-schema-type-object
title: Asyncapi 3 Headers Schema Type Object
severity: info
given: $.components.messageTraits.*.headers | $.components.messages.*.headers |
  $.channels.*.messages.*.headers | $.channels.*.messages.*.traits[*].headers
message: Headers schema type must be "object" ({{error}}).
description: Headers schema type must be "object".
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-headers-schema-type-object/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-headers-schema-type-object' (Asyncapi 3 Headers
  Schema Type Object). Requirement: Headers schema type must be \"object\". To
  fix: Adjust the targeted value so it conforms to the schema this rule
  requires. This rule is evaluated at the JSONPath
  `$.components.messageTraits.*.headers | $.components.messages.*.headers |
  $.channels.*.messages.*.headers | $.channels.*.messages.*.traits[*].headers` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-3-headers-schema-type-object:
    title: Asyncapi 3 Headers Schema Type Object
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-headers-schema-type-object/
    description: Headers schema type must be "object".
    message: Headers schema type must be "object" ({{error}}).
    severity: info
    given:
      - $.components.messageTraits.*.headers
      - $.components.messages.*.headers
      - $.channels.*.messages.*.headers
      - $.channels.*.messages.*.traits[*].headers
    then:
      function: schema
      functionOptions:
        allErrors: true
        schema:
          type: object
          properties:
            type:
              enum:
                - object
          required:
            - type
    tags:
      - format:asyncapi
      - spec:channels
      - spec:messages
      - spec:components
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-headers-schema-type-object' (Asyncapi 3 Headers
      Schema Type Object). Requirement: Headers schema type must be \"object\". To
      fix: Adjust the targeted value so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath
      `$.components.messageTraits.*.headers | $.components.messages.*.headers |
      $.channels.*.messages.*.headers | $.channels.*.messages.*.traits[*].headers`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid AsyncAPI. Return only the complete corrected document, with
      no commentary."
---
