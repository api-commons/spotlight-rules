---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-document-unresolved
title: Asyncapi 3 Document Unresolved
severity: info
given: $
message: "{{error}}"
description: Checking if the AsyncAPI v3 document has valid structure before
  resolving references.
experience:
  - data-modeling
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-document-unresolved/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-document-unresolved' (Asyncapi 3 Document
  Unresolved). Requirement: Checking if the AsyncAPI v3 document has valid
  structure before resolving references. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
