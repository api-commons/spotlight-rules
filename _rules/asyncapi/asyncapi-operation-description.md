---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-operation-description
title: Asyncapi Operation Description
severity: info
given: $.channels[*][publish,subscribe]
message: Operation "description" must be present and non-empty string.
description: Operation "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-operation-description' (Asyncapi Operation
  Description). Requirement: Operation \"description\" must be present and
  non-empty string. To fix: Ensure `description` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath
  `$.channels[*][publish,subscribe]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-operation-description:
    title: Asyncapi Operation Description
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-operation-description/
    description: Operation "description" must be present and non-empty string.
    message: Operation "description" must be present and non-empty string.
    severity: info
    given: $.channels[*][publish,subscribe]
    then:
      field: description
      function: truthy
    tags:
      - format:asyncapi
      - spec:channels
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-operation-description' (Asyncapi Operation
      Description). Requirement: Operation \"description\" must be present and
      non-empty string. To fix: Ensure `description` is present and non-empty at
      each matching location. This rule is evaluated at the JSONPath
      `$.channels[*][publish,subscribe]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
