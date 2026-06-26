---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-url
title: Document Require URL
severity: info
given: $
message: Missing `url`.
description: apis-json document should declare a `url` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-url/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-url' (Document Require URL). Requirement:
  apis-json document should declare a `url` property. To fix: Ensure `url` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
---
