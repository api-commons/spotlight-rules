---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-modified
title: Document Require Modified
severity: info
given: $
message: Missing `modified`.
description: apis-json document should declare a `modified` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-modified/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-modified' (Document Require Modified).
  Requirement: apis-json document should declare a `modified` property. To fix:
  Ensure `modified` is present and non-empty at each matching location.
  Guidance: Missing `modified`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-modified:
    title: Document Require Modified
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-modified/
    description: apis-json document should declare a `modified` property.
    message: Missing `modified`.
    given: $
    severity: info
    then:
      field: modified
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-modified' (Document Require Modified).
      Requirement: apis-json document should declare a `modified` property. To
      fix: Ensure `modified` is present and non-empty at each matching location.
      Guidance: Missing `modified`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
