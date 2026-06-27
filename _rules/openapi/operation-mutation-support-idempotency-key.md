---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-mutation-support-idempotency-key
title: Operation Mutation Support Idempotency Key
severity: info
given: $.paths[*][post,patch]
message: Mutation should accept an Idempotency-Key header for safe retries.
description: POST and PATCH operations should accept an Idempotency-Key request
  header so clients can safely retry without creating duplicates.
experience:
  - reliability
  - consistency
spec:
  - parameters
topic:
  - idempotency
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-mutation-support-idempotency-key/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-mutation-support-idempotency-key' (Operation
  Mutation Support Idempotency Key). Requirement: POST and PATCH operations
  should accept an Idempotency-Key request header so clients can safely retry
  without creating duplicates. To fix: Adjust `parameters` so it conforms to the
  schema this rule requires. This rule is evaluated at the JSONPath
  `$.paths[*][post,patch]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  operation-mutation-support-idempotency-key:
    title: Operation Mutation Support Idempotency Key
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-mutation-support-idempotency-key/
    description: POST and PATCH operations should accept an Idempotency-Key request
      header so clients can safely retry without creating duplicates.
    message: Mutation should accept an Idempotency-Key header for safe retries.
    given: $.paths[*][post,patch]
    severity: info
    then:
      field: parameters
      function: schema
      functionOptions:
        schema:
          type: array
          contains:
            type: object
            required:
              - name
              - in
            properties:
              name:
                const: Idempotency-Key
              in:
                const: header
    tags:
      - format:openapi
      - spec:parameters
      - topic:idempotency
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-mutation-support-idempotency-key' (Operation
      Mutation Support Idempotency Key). Requirement: POST and PATCH operations
      should accept an Idempotency-Key request header so clients can safely retry
      without creating duplicates. To fix: Adjust `parameters` so it conforms to
      the schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths[*][post,patch]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
