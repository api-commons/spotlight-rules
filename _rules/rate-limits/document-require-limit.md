---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: document-require-limit
title: Document Require Limit
severity: info
given: $
message: limits should be present
description: The `limits` property should be present.
experience:
  - reliability
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/document-require-limit/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'document-require-limit' (Document Require Limit).
  Requirement: The `limits` property should be present. To fix: Ensure `limits`
  is present and non-empty at each matching location. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Rate Limits. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-limit:
    title: Document Require Limit
    reference: https://spotlight-rules.com/spec/rules/rate-limits/document-require-limit/
    description: The `limits` property should be present.
    message: limits should be present
    severity: info
    given: $
    then:
      field: limits
      function: truthy
    tags:
      - format:rate-limits
      - spec:document
      - experience:reliability
      - experience:data-modeling
    prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
      governance rule 'document-require-limit' (Document Require Limit).
      Requirement: The `limits` property should be present. To fix: Ensure
      `limits` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid Rate
      Limits. Return only the complete corrected document, with no commentary."
---
