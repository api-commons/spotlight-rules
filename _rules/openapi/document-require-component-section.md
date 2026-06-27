---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-component-section
title: Document Require Component Section
severity: info
given: $
message: "{{description}}: {{error}}"
description: The API contract MUST include a 'components' section.
experience:
  - consistency
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-component-section/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-component-section' (Document Require
  Component Section). Requirement: The API contract MUST include a 'components'
  section. To fix: Ensure `components` is present and non-empty at each matching
  location. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-component-section:
    title: Document Require Component Section
    reference: https://spotlight-rules.com/spec/rules/openapi/document-require-component-section/
    description: The API contract MUST include a 'components' section.
    message: "{{description}}: {{error}}"
    severity: info
    given: $
    then:
      field: components
      function: truthy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:document
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'document-require-component-section' (Document Require
      Component Section). Requirement: The API contract MUST include a
      'components' section. To fix: Ensure `components` is present and non-empty
      at each matching location. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
