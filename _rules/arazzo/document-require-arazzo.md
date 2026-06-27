---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: document-require-arazzo
title: Document Require Arazzo
severity: info
given: $
message: Missing `arazzo`.
description: arazzo document should declare a `arazzo` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-arazzo/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'document-require-arazzo' (Document Require Arazzo).
  Requirement: arazzo document should declare a `arazzo` property. To fix:
  Ensure `arazzo` is present and non-empty at each matching location. Guidance:
  Missing `arazzo`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid Arazzo. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-arazzo:
    title: Document Require Arazzo
    reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-arazzo/
    description: arazzo document should declare a `arazzo` property.
    message: Missing `arazzo`.
    given: $
    severity: info
    then:
      field: arazzo
      function: truthy
    tags:
      - format:arazzo
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'document-require-arazzo' (Document Require Arazzo).
      Requirement: arazzo document should declare a `arazzo` property. To fix:
      Ensure `arazzo` is present and non-empty at each matching location.
      Guidance: Missing `arazzo`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Arazzo. Return only the complete
      corrected document, with no commentary."
---
