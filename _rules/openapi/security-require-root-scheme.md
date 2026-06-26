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
---
