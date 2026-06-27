---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-operation-description
title: Asyncapi 3 Operation Description
severity: info
given: $.operations.*
message: Operation "description" must be present and non-empty string.
description: Operation "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-operation-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-operation-description' (Asyncapi 3 Operation
  Description). Requirement: Operation \"description\" must be present and
  non-empty string. To fix: Ensure `description` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath
  `$.operations.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  asyncapi-3-operation-description:
    title: Asyncapi 3 Operation Description
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-operation-description/
    description: Operation "description" must be present and non-empty string.
    message: Operation "description" must be present and non-empty string.
    severity: info
    given: $.operations.*
    then:
      field: description
      function: truthy
    tags:
      - format:asyncapi
      - spec:operations
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-operation-description' (Asyncapi 3 Operation
      Description). Requirement: Operation \"description\" must be present and
      non-empty string. To fix: Ensure `description` is present and non-empty at
      each matching location. This rule is evaluated at the JSONPath
      `$.operations.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
