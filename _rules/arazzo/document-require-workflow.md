---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: document-require-workflow
title: Document Require Workflow
severity: info
given: $
message: Missing `workflows`.
description: arazzo document should declare a `workflows` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-workflow/
prompt: "You are editing an Arazzo document to satisfy the Spotlight API
  governance rule 'document-require-workflow' (Document Require Workflow).
  Requirement: arazzo document should declare a `workflows` property. To fix:
  Ensure `workflows` is present and non-empty at each matching location.
  Guidance: Missing `workflows`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid Arazzo. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-workflow:
    title: Document Require Workflow
    reference: https://spotlight-rules.com/spec/rules/arazzo/document-require-workflow/
    description: arazzo document should declare a `workflows` property.
    message: Missing `workflows`.
    given: $
    severity: info
    then:
      field: workflows
      function: truthy
    tags:
      - format:arazzo
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an Arazzo document to satisfy the Spotlight API
      governance rule 'document-require-workflow' (Document Require Workflow).
      Requirement: arazzo document should declare a `workflows` property. To fix:
      Ensure `workflows` is present and non-empty at each matching location.
      Guidance: Missing `workflows`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Arazzo. Return only the complete
      corrected document, with no commentary."
---
