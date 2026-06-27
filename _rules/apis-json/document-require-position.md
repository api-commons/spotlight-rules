---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-position
title: Document Require Position
severity: info
given: $
message: Missing `position`.
description: apis-json document should declare a `position` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-position/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-position' (Document Require Position).
  Requirement: apis-json document should declare a `position` property. To fix:
  Ensure `position` is present and non-empty at each matching location.
  Guidance: Missing `position`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-position:
    title: Document Require Position
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-position/
    description: apis-json document should declare a `position` property.
    message: Missing `position`.
    given: $
    severity: info
    then:
      field: position
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-position' (Document Require Position).
      Requirement: apis-json document should declare a `position` property. To
      fix: Ensure `position` is present and non-empty at each matching location.
      Guidance: Missing `position`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
