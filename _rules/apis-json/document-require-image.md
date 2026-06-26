---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-image
title: Document Require Image
severity: info
given: $
message: Missing `image`.
description: apis-json document should declare a `image` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-image/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-image' (Document Require Image).
  Requirement: apis-json document should declare a `image` property. To fix:
  Ensure `image` is present and non-empty at each matching location. Guidance:
  Missing `image`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
