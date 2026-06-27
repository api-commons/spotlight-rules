---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-prompts
title: Document Require Prompts
severity: info
given: $
message: Missing `prompts`.
description: apis-json document should declare a `prompts` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-prompts/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-prompts' (Document Require Prompts).
  Requirement: apis-json document should declare a `prompts` property. To fix:
  Ensure `prompts` is present and non-empty at each matching location. Guidance:
  Missing `prompts`. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  document-require-prompts:
    title: Document Require Prompts
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-prompts/
    description: apis-json document should declare a `prompts` property.
    message: Missing `prompts`.
    given: $
    severity: info
    then:
      field: prompts
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-prompts' (Document Require Prompts).
      Requirement: apis-json document should declare a `prompts` property. To fix:
      Ensure `prompts` is present and non-empty at each matching location.
      Guidance: Missing `prompts`. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
