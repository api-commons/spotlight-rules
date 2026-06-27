---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-include
title: Document Require Include
severity: info
given: $
message: Missing `include`.
description: apis-json document should declare a `include` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-include/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-include' (Document Require Include).
  Requirement: apis-json document should declare a `include` property. To fix:
  Ensure `include` is present and non-empty at each matching location. Guidance:
  Missing `include`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-include:
    title: Document Require Include
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-include/
    description: apis-json document should declare a `include` property.
    message: Missing `include`.
    given: $
    severity: info
    then:
      field: include
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-include' (Document Require Include).
      Requirement: apis-json document should declare a `include` property. To fix:
      Ensure `include` is present and non-empty at each matching location.
      Guidance: Missing `include`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
