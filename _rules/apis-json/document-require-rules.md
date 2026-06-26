---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-rules
title: Document Require Rules
severity: info
given: $
message: Missing `rules`.
description: apis-json document should declare a `rules` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-rules/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-rules' (Document Require Rules).
  Requirement: apis-json document should declare a `rules` property. To fix:
  Ensure `rules` is present and non-empty at each matching location. Guidance:
  Missing `rules`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
