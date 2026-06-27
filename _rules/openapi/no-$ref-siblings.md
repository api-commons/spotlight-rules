---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-$ref-siblings
title: No $ref Siblings
severity: info
given: $..[?(@property === '$ref')]
message: "{{error}}"
description: Property must not be placed among $ref.
experience:
  - reliability
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/no-$ref-siblings/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'no-$ref-siblings' (No $ref Siblings). Requirement: Property
  must not be placed among $ref. This rule is evaluated at the JSONPath
  `$..[?(@property === '$ref')]` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  no-$ref-siblings:
    title: No $ref Siblings
    reference: https://spotlight-rules.com/spec/rules/openapi/no-$ref-siblings/
    description: Property must not be placed among $ref.
    message: "{{error}}"
    severity: info
    given: $..[?(@property === '$ref')]
    then:
      function: refSiblings
    tags:
      - format:openapi
      - spec:schemas
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'no-$ref-siblings' (No $ref Siblings). Requirement: Property
      must not be placed among $ref. This rule is evaluated at the JSONPath
      `$..[?(@property === '$ref')]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
