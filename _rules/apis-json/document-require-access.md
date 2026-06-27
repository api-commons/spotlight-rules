---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-access
title: Document Require Access
severity: info
given: $
message: Missing `access`.
description: apis-json document should declare a `access` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-access/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-access' (Document Require Access).
  Requirement: apis-json document should declare a `access` property. To fix:
  Ensure `access` is present and non-empty at each matching location. Guidance:
  Missing `access`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-access:
    title: Document Require Access
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-access/
    description: apis-json document should declare a `access` property.
    message: Missing `access`.
    given: $
    severity: info
    then:
      field: access
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-access' (Document Require Access).
      Requirement: apis-json document should declare a `access` property. To fix:
      Ensure `access` is present and non-empty at each matching location.
      Guidance: Missing `access`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
