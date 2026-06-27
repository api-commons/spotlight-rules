---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-path
title: Document Require Path
severity: info
given: $
message: Missing `paths`.
description: openapi document should declare a `paths` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-path/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-path' (Document Require Path). Requirement:
  openapi document should declare a `paths` property. To fix: Ensure `paths` is
  present and non-empty at each matching location. Guidance: Missing `paths`.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-path:
    title: Document Require Path
    reference: https://spotlight-rules.com/spec/rules/openapi/document-require-path/
    description: openapi document should declare a `paths` property.
    message: Missing `paths`.
    given: $
    severity: info
    then:
      field: paths
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'document-require-path' (Document Require Path).
      Requirement: openapi document should declare a `paths` property. To fix:
      Ensure `paths` is present and non-empty at each matching location. Guidance:
      Missing `paths`. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
