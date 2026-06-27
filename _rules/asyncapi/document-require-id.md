---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-id
title: Document Require ID
severity: info
given: $
message: Missing `id`.
description: asyncapi document should declare a `id` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-id/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-id' (Document Require ID). Requirement:
  asyncapi document should declare a `id` property. To fix: Ensure `id` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-id:
    title: Document Require ID
    reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-id/
    description: asyncapi document should declare a `id` property.
    message: Missing `id`.
    given: $
    severity: info
    then:
      field: id
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'document-require-id' (Document Require ID). Requirement:
      asyncapi document should declare a `id` property. To fix: Ensure `id` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid AsyncAPI. Return only
      the complete corrected document, with no commentary."
---
