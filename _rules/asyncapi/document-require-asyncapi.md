---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-asyncapi
title: Document Require Asyncapi
severity: info
given: $
message: Missing `asyncapi`.
description: asyncapi document should declare a `asyncapi` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-asyncapi/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-asyncapi' (Document Require Asyncapi).
  Requirement: asyncapi document should declare a `asyncapi` property. To fix:
  Ensure `asyncapi` is present and non-empty at each matching location.
  Guidance: Missing `asyncapi`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-asyncapi:
    title: Document Require Asyncapi
    reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-asyncapi/
    description: asyncapi document should declare a `asyncapi` property.
    message: Missing `asyncapi`.
    given: $
    severity: info
    then:
      field: asyncapi
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'document-require-asyncapi' (Document Require Asyncapi).
      Requirement: asyncapi document should declare a `asyncapi` property. To fix:
      Ensure `asyncapi` is present and non-empty at each matching location.
      Guidance: Missing `asyncapi`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
