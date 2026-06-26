---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: document-require-description
title: Document Require Description
severity: info
given: $
message: description should be present
description: The `description` property should be present.
experience:
  - documentation
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-description/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-description' (Document Require Description).
  Requirement: The `description` property should be present. To fix: Ensure
  `description` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid JSON
  Schema. Return only the complete corrected document, with no commentary."
builtin: false
---
