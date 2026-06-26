---
layout: rule
artifact: json-ld
artifact_label: JSON-LD
slug: document-require-id
title: Document Require ID
severity: info
given: $
message: "@id should be present"
description: The `@id` property should be present.
experience:
  - data-modeling
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-ld/document-require-id/
prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
  governance rule 'document-require-id' (Document Require ID). Requirement: The
  `@id` property should be present. To fix: Ensure `@id` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON-LD. Return only the complete
  corrected document, with no commentary."
builtin: false
---
