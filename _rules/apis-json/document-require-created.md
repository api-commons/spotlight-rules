---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-created
title: Document Require Created
severity: info
given: $
message: Missing `created`.
description: apis-json document should declare a `created` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-created/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-created' (Document Require Created).
  Requirement: apis-json document should declare a `created` property. To fix:
  Ensure `created` is present and non-empty at each matching location. Guidance:
  Missing `created`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
