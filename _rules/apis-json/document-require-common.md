---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-common
title: Document Require Common
severity: info
given: $
message: Missing `common`.
description: apis-json document should declare a `common` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-common/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-common' (Document Require Common).
  Requirement: apis-json document should declare a `common` property. To fix:
  Ensure `common` is present and non-empty at each matching location. Guidance:
  Missing `common`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
---
