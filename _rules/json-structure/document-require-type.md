---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: document-require-type
title: Document Require Type
severity: info
given: $
message: type should be present
description: The `type` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/document-require-type/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'document-require-type' (Document Require Type). Requirement:
  The `type` property should be present. To fix: Ensure `type` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Structure. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-type:
    title: Document Require Type
    reference: https://spotlight-rules.com/spec/rules/json-structure/document-require-type/
    description: The `type` property should be present.
    message: type should be present
    severity: info
    given: $
    then:
      field: type
      function: truthy
    tags:
      - format:json-structure
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
      governance rule 'document-require-type' (Document Require Type).
      Requirement: The `type` property should be present. To fix: Ensure `type` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid JSON Structure. Return
      only the complete corrected document, with no commentary."
---
