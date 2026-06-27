---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-description
title: Operation Description
severity: info
given: "#OperationObject"
message: Operation "description" must be present and non-empty string.
description: Operation "description" must be present and non-empty string.
experience:
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-description' (Operation Description). Requirement:
  Operation \"description\" must be present and non-empty string. To fix: Ensure
  `description` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `#OperationObject` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  operation-description:
    title: Operation Description
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-description/
    description: Operation "description" must be present and non-empty string.
    message: Operation "description" must be present and non-empty string.
    severity: info
    given: "#OperationObject"
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-description' (Operation Description).
      Requirement: Operation \"description\" must be present and non-empty string.
      To fix: Ensure `description` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `#OperationObject` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
