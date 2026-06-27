---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-aid
title: Document Require Aid
severity: info
given: $
message: Missing `aid`.
description: apis-json document should declare a `aid` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-aid/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-aid' (Document Require Aid). Requirement:
  apis-json document should declare a `aid` property. To fix: Ensure `aid` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-aid:
    title: Document Require Aid
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-aid/
    description: apis-json document should declare a `aid` property.
    message: Missing `aid`.
    given: $
    severity: info
    then:
      field: aid
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-aid' (Document Require Aid). Requirement:
      apis-json document should declare a `aid` property. To fix: Ensure `aid` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid APIs.json. Return only
      the complete corrected document, with no commentary."
---
