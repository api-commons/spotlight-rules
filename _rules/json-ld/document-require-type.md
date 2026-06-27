---
layout: rule
artifact: json-ld
artifact_label: JSON-LD
slug: document-require-type
title: Document Require Type
severity: info
given: $
message: "@type should be present"
description: The `@type` property should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-ld/document-require-type/
prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
  governance rule 'document-require-type' (Document Require Type). Requirement:
  The `@type` property should be present. To fix: Ensure `@type` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON-LD. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-type:
    title: Document Require Type
    reference: https://spotlight-rules.com/spec/rules/json-ld/document-require-type/
    description: The `@type` property should be present.
    message: "@type should be present"
    severity: info
    given: $
    then:
      field: "@type"
      function: truthy
    tags:
      - format:json-ld
      - spec:document
      - experience:data-modeling
      - experience:discoverability
    prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
      governance rule 'document-require-type' (Document Require Type).
      Requirement: The `@type` property should be present. To fix: Ensure `@type`
      is present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid JSON-LD. Return only
      the complete corrected document, with no commentary."
---
