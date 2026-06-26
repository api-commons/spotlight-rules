---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-document-schema
title: Arazzo Document Schema
severity: info
given: $
message: "{{error}}"
description: Arazzo Document must be valid against the Arazzo schema.
experience:
  - data-modeling
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/arazzo-document-schema/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'arazzo-document-schema' (Arazzo Document Schema).
  Requirement: Arazzo Document must be valid against the Arazzo schema. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Arazzo.
  Return only the complete corrected document, with no commentary."
builtin: true
---
