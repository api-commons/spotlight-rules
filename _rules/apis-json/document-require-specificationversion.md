---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-specificationversion
title: Document Require Specificationversion
severity: info
given: $
message: Missing `specificationVersion`.
description: apis-json document should declare a `specificationVersion` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-specificationversion/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-specificationversion' (Document Require
  Specificationversion). Requirement: apis-json document should declare a
  `specificationVersion` property. To fix: Ensure `specificationVersion` is
  present and non-empty at each matching location. Guidance: Missing
  `specificationVersion`. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid APIs.json. Return only the complete corrected
  document, with no commentary."
builtin: false
---
