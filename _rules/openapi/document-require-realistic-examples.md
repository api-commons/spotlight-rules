---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-realistic-examples
title: Document Require Realistic Examples
severity: info
given: $..[?(@.example || @.examples)]
message: The {{property}} SHOULD include a real-like example. Add realistic
  examples to improve API usability.
description: API design SHOULD include real-like examples for request and
  response definitions.
experience:
  - documentation
  - usability
spec:
  - examples
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-realistic-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-realistic-examples' (Document Require
  Realistic Examples). Requirement: API design SHOULD include real-like examples
  for request and response definitions. To fix: Ensure `example` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$..[?(@.example || @.examples)]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
