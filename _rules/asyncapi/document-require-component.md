---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-component
title: Document Require Component
severity: info
given: $
message: Missing `components`.
description: asyncapi document should declare a `components` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-component/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-component' (Document Require Component).
  Requirement: asyncapi document should declare a `components` property. To fix:
  Ensure `components` is present and non-empty at each matching location.
  Guidance: Missing `components`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-component:
    title: Document Require Component
    reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-component/
    description: asyncapi document should declare a `components` property.
    message: Missing `components`.
    given: $
    severity: info
    then:
      field: components
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'document-require-component' (Document Require Component).
      Requirement: asyncapi document should declare a `components` property. To
      fix: Ensure `components` is present and non-empty at each matching location.
      Guidance: Missing `components`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
