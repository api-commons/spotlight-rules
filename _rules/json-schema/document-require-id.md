---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
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
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-id/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-id' (Document Require ID). Requirement: The
  `$id` property should be present. To fix: Ensure `$id` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Schema. Return only the complete
  corrected document, with no commentary."
builtin: false
---
