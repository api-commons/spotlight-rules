---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: document-require-id
title: Document Require ID
severity: info
given: $
message: $id should be present
description: The `$id` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/document-require-id/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'document-require-id' (Document Require ID). Requirement: The
  `$id` property should be present. To fix: Ensure `$id` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Structure. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-id:
    title: Document Require ID
    reference: https://spotlight-rules.com/spec/rules/json-structure/document-require-id/
    description: The `$id` property should be present.
    message: $id should be present
    severity: info
    given: $
    then:
      field: $id
      function: truthy
    tags:
      - format:json-structure
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
      governance rule 'document-require-id' (Document Require ID). Requirement:
      The `$id` property should be present. To fix: Ensure `$id` is present and
      non-empty at each matching location. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid JSON Structure. Return only the
      complete corrected document, with no commentary."
---
