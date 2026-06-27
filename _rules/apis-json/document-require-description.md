---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-description
title: Document Require Description
severity: info
given: $
message: Missing `description`.
description: apis-json document should declare a `description` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-description/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-description' (Document Require Description).
  Requirement: apis-json document should declare a `description` property. To
  fix: Ensure `description` is present and non-empty at each matching location.
  Guidance: Missing `description`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-description:
    title: Document Require Description
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-description/
    description: apis-json document should declare a `description` property.
    message: Missing `description`.
    given: $
    severity: info
    then:
      field: description
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-description' (Document Require
      Description). Requirement: apis-json document should declare a `description`
      property. To fix: Ensure `description` is present and non-empty at each
      matching location. Guidance: Missing `description`. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid APIs.json. Return only
      the complete corrected document, with no commentary."
---
