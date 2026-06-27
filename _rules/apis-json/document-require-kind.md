---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-kind
title: Document Require Kind
severity: info
given: $
message: Missing `kind`.
description: apis-json document should declare a `kind` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-kind/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-kind' (Document Require Kind). Requirement:
  apis-json document should declare a `kind` property. To fix: Ensure `kind` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-kind:
    title: Document Require Kind
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-kind/
    description: apis-json document should declare a `kind` property.
    message: Missing `kind`.
    given: $
    severity: info
    then:
      field: kind
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-kind' (Document Require Kind).
      Requirement: apis-json document should declare a `kind` property. To fix:
      Ensure `kind` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
