---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-operation
title: Document Require Operation
severity: info
given: $
message: Missing `operations`.
description: asyncapi document should declare a `operations` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-operation/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-operation' (Document Require Operation).
  Requirement: asyncapi document should declare a `operations` property. To fix:
  Ensure `operations` is present and non-empty at each matching location.
  Guidance: Missing `operations`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-operation:
    title: Document Require Operation
    reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-operation/
    description: asyncapi document should declare a `operations` property.
    message: Missing `operations`.
    given: $
    severity: info
    then:
      field: operations
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'document-require-operation' (Document Require Operation).
      Requirement: asyncapi document should declare a `operations` property. To
      fix: Ensure `operations` is present and non-empty at each matching location.
      Guidance: Missing `operations`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
