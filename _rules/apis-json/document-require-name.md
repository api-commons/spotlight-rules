---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-name
title: Document Require Name
severity: info
given: $
message: Missing `name`.
description: apis-json document should declare a `name` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-name/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-name' (Document Require Name). Requirement:
  apis-json document should declare a `name` property. To fix: Ensure `name` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-name:
    title: Document Require Name
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-name/
    description: apis-json document should declare a `name` property.
    message: Missing `name`.
    given: $
    severity: info
    then:
      field: name
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-name' (Document Require Name).
      Requirement: apis-json document should declare a `name` property. To fix:
      Ensure `name` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      APIs.json. Return only the complete corrected document, with no commentary."
---
