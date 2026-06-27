---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: document-require-info
title: Document Require Info
severity: info
given: $
message: Missing `info`.
description: arazzo document should declare a `info` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-info/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'document-require-info' (Document Require Info). Requirement:
  arazzo document should declare a `info` property. To fix: Ensure `info` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid Arazzo. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-info:
    title: Document Require Info
    reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-info/
    description: arazzo document should declare a `info` property.
    message: Missing `info`.
    given: $
    severity: info
    then:
      field: info
      function: truthy
    tags:
      - format:arazzo
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'document-require-info' (Document Require Info).
      Requirement: arazzo document should declare a `info` property. To fix:
      Ensure `info` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      Arazzo. Return only the complete corrected document, with no commentary."
---
