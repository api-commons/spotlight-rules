---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-apis
title: Document Require APIs
severity: info
given: $
message: Missing `apis`.
description: apis-json document should declare a `apis` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-apis/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-apis' (Document Require APIs). Requirement:
  apis-json document should declare a `apis` property. To fix: Ensure `apis` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-apis:
    title: Document Require APIs
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-apis/
    description: apis-json document should declare a `apis` property.
    message: Missing `apis`.
    given: $
    severity: info
    then:
      field: apis
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-apis' (Document Require APIs).
      Requirement: apis-json document should declare a `apis` property. To fix:
      Ensure `apis` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
