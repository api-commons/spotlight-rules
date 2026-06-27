---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-workflow
title: Document Require Workflow
severity: info
given: $
message: Missing `workflows`.
description: apis-json document should declare a `workflows` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-workflow/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-workflow' (Document Require Workflow).
  Requirement: apis-json document should declare a `workflows` property. To fix:
  Ensure `workflows` is present and non-empty at each matching location.
  Guidance: Missing `workflows`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-workflow:
    title: Document Require Workflow
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-workflow/
    description: apis-json document should declare a `workflows` property.
    message: Missing `workflows`.
    given: $
    severity: info
    then:
      field: workflows
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-workflow' (Document Require Workflow).
      Requirement: apis-json document should declare a `workflows` property. To
      fix: Ensure `workflows` is present and non-empty at each matching location.
      Guidance: Missing `workflows`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
