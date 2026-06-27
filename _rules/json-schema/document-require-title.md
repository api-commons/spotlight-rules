---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: document-require-title
title: Document Require Title
severity: info
given: $
message: title should be present
description: The `title` property should be present.
experience:
  - documentation
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-title/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-title' (Document Require Title).
  Requirement: The `title` property should be present. To fix: Ensure `title` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid JSON Schema. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-title:
    title: Document Require Title
    reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-title/
    description: The `title` property should be present.
    message: title should be present
    severity: info
    given: $
    then:
      field: title
      function: truthy
    tags:
      - format:jsonschema
      - spec:schemas
      - experience:documentation
      - experience:data-modeling
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'document-require-title' (Document Require Title).
      Requirement: The `title` property should be present. To fix: Ensure `title`
      is present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid JSON Schema. Return
      only the complete corrected document, with no commentary."
---
