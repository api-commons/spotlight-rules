---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-require-root-scheme
title: Security Require Root Scheme
severity: info
given: $
message: Security field MUST be present at the root of the spec with at least
  one item (ie.
description: Security field MUST be present at the root of the spec with at
  least one item (ie. HTTPBearer, Token, APIKey, etc.).
experience:
  - security
  - governance
spec:
  - document
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-require-root-scheme/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-require-root-scheme' (Security Require Root Scheme).
  Requirement: Security field MUST be present at the root of the spec with at
  least one item (ie. HTTPBearer, Token, APIKey, etc.). To fix: Adjust
  `security` so it conforms to the schema this rule requires. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  security-require-root-scheme:
    title: Security Require Root Scheme
    reference: https://spotlight-rules.com/spec/rules/openapi/security-require-root-scheme/
    description: Security field MUST be present at the root of the spec with at
      least one item (ie. HTTPBearer, Token, APIKey, etc.).
    message: Security field MUST be present at the root of the spec with at least
      one item (ie.
    severity: info
    given: $
    then:
      field: security
      function: schema
      functionOptions:
        schema:
          type: array
          minItems: 1
    tags:
      - owasp:api2
      - format:openapi
      - spec:document
      - experience:security
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-require-root-scheme' (Security Require Root
      Scheme). Requirement: Security field MUST be present at the root of the spec
      with at least one item (ie. HTTPBearer, Token, APIKey, etc.). To fix: Adjust
      `security` so it conforms to the schema this rule requires. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
