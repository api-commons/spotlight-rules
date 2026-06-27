---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-network
title: Document Require Network
severity: info
given: $
message: Missing `network`.
description: apis-json document should declare a `network` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-network/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-network' (Document Require Network).
  Requirement: apis-json document should declare a `network` property. To fix:
  Ensure `network` is present and non-empty at each matching location. Guidance:
  Missing `network`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-network:
    title: Document Require Network
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-network/
    description: apis-json document should declare a `network` property.
    message: Missing `network`.
    given: $
    severity: info
    then:
      field: network
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-network' (Document Require Network).
      Requirement: apis-json document should declare a `network` property. To fix:
      Ensure `network` is present and non-empty at each matching location.
      Guidance: Missing `network`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
