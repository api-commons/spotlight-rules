---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-type
title: Document Require Type
severity: info
given: $
message: Missing `type`.
description: apis-json document should declare a `type` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-type/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-type' (Document Require Type). Requirement:
  apis-json document should declare a `type` property. To fix: Ensure `type` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-type:
    title: Document Require Type
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-type/
    description: apis-json document should declare a `type` property.
    message: Missing `type`.
    given: $
    severity: info
    then:
      field: type
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-type' (Document Require Type).
      Requirement: apis-json document should declare a `type` property. To fix:
      Ensure `type` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
