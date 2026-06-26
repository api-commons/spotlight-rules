---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-overlays
title: Document Require Overlays
severity: info
given: $
message: Missing `overlays`.
description: apis-json document should declare a `overlays` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-overlays/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-overlays' (Document Require Overlays).
  Requirement: apis-json document should declare a `overlays` property. To fix:
  Ensure `overlays` is present and non-empty at each matching location.
  Guidance: Missing `overlays`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
---
