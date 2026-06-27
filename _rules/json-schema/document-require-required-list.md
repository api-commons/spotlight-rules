---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: document-require-required-list
title: Document Require Required List
severity: info
given: $
message: required should be present
description: The `required` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-required-list/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-required-list' (Document Require Required
  List). Requirement: The `required` property should be present. To fix: Ensure
  `required` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid JSON
  Schema. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-required-list:
    title: Document Require Required List
    reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-required-list/
    description: The `required` property should be present.
    message: required should be present
    severity: info
    given: $
    then:
      field: required
      function: truthy
    tags:
      - format:jsonschema
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'document-require-required-list' (Document Require Required
      List). Requirement: The `required` property should be present. To fix:
      Ensure `required` is present and non-empty at each matching location. Make
      the smallest change that satisfies the rule, leave all unrelated content,
      key order, comments, and formatting unchanged, and keep the document valid
      JSON Schema. Return only the complete corrected document, with no
      commentary."
---
