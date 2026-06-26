---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
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
reference: https://spotlight-rules.com/spec/rules/json-schema/document-require-type/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'document-require-type' (Document Require Type). Requirement:
  The `type` property should be present. To fix: Ensure `type` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Schema. Return only the complete
  corrected document, with no commentary."
builtin: false
---
