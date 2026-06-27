---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-require-root
title: Security Require Root
severity: info
given: $
message: "{{description}}: {{error}}"
description: The API contract MUST include a 'security' section at the root level.
experience:
  - security
  - governance
spec:
  - document
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-require-root/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-require-root' (Security Require Root). Requirement:
  The API contract MUST include a 'security' section at the root level. To fix:
  Ensure `security` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  security-require-root:
    title: Security Require Root
    reference: https://spotlight-rules.com/spec/rules/openapi/security-require-root/
    description: The API contract MUST include a 'security' section at the root level.
    message: "{{description}}: {{error}}"
    severity: info
    given: $
    then:
      field: security
      function: truthy
    formats:
      - oas3
    tags:
      - owasp:api2
      - format:openapi
      - spec:document
      - experience:security
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-require-root' (Security Require Root).
      Requirement: The API contract MUST include a 'security' section at the root
      level. To fix: Ensure `security` is present and non-empty at each matching
      location. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
