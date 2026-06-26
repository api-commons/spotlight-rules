---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-rating
title: Document Require Rating
severity: info
given: $
message: Missing `rating`.
description: apis-json document should declare a `rating` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-rating/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-rating' (Document Require Rating).
  Requirement: apis-json document should declare a `rating` property. To fix:
  Ensure `rating` is present and non-empty at each matching location. Guidance:
  Missing `rating`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
