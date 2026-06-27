---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: component-message-require-examples
title: Component Message Require Examples
severity: info
given: $.components.messages.*
message: Message must have examples
description: Message must have examples.
experience:
  - documentation
  - usability
spec:
  - messages
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/component-message-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'component-message-require-examples' (Component Message
  Require Examples). Requirement: Message must have examples. To fix: Ensure
  `examples` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.components.messages.*` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  component-message-require-examples:
    title: Component Message Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/component-message-require-examples/
    description: Message must have examples.
    message: Message must have examples
    severity: info
    given: $.components.messages.*
    then:
      field: examples
      function: truthy
    formats:
      - aas3
    tags:
      - format:openapi
      - spec:messages
      - spec:components
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'component-message-require-examples' (Component Message
      Require Examples). Requirement: Message must have examples. To fix: Ensure
      `examples` is present and non-empty at each matching location. This rule is
      evaluated at the JSONPath `$.components.messages.*` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
