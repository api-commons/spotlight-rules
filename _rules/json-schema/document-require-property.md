---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: document-require-property
title: Document Require Property
severity: info
given: $
message: properties should be present
description: The `properties` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-property/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-property' (Document Require Property).
  Requirement: The `properties` property should be present. To fix: Ensure
  `properties` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid JSON
  Schema. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-property:
    title: Document Require Property
    reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-property/
    description: The `properties` property should be present.
    message: properties should be present
    severity: info
    given: $
    then:
      field: properties
      function: truthy
    tags:
      - format:jsonschema
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'document-require-property' (Document Require Property).
      Requirement: The `properties` property should be present. To fix: Ensure
      `properties` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid JSON
      Schema. Return only the complete corrected document, with no commentary."
---
