---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-visibility
title: Document Require Visibility
severity: info
given: $
message: Missing `visibility`.
description: apis-json document should declare a `visibility` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-visibility/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-visibility' (Document Require Visibility).
  Requirement: apis-json document should declare a `visibility` property. To
  fix: Ensure `visibility` is present and non-empty at each matching location.
  Guidance: Missing `visibility`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-visibility:
    title: Document Require Visibility
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-visibility/
    description: apis-json document should declare a `visibility` property.
    message: Missing `visibility`.
    given: $
    severity: info
    then:
      field: visibility
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-visibility' (Document Require Visibility).
      Requirement: apis-json document should declare a `visibility` property. To
      fix: Ensure `visibility` is present and non-empty at each matching location.
      Guidance: Missing `visibility`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
