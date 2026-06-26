---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-tag
title: Document Require Tag
severity: info
given: $
message: Missing `tags`.
description: apis-json document should declare a `tags` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-tag/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-tag' (Document Require Tag). Requirement:
  apis-json document should declare a `tags` property. To fix: Ensure `tags` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
---
