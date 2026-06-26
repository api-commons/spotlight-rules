---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: document-require-component
title: Document Require Component
severity: info
given: $
message: Missing `components`.
description: arazzo document should declare a `components` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-component/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'document-require-component' (Document Require Component).
  Requirement: arazzo document should declare a `components` property. To fix:
  Ensure `components` is present and non-empty at each matching location.
  Guidance: Missing `components`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Arazzo. Return only the complete
  corrected document, with no commentary."
builtin: false
---
