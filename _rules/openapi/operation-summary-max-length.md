---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-max-length
title: Operation Summary Max Length
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operation Summary MUST Be Less Than 50 Characters
description: Apply length constraints to the operation summary helps keep them
  consistent for publishing in documentation.
experience:
  - documentation
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-summary-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-summary-max-length' (Operation Summary Max Length).
  Requirement: Apply length constraints to the operation summary helps keep them
  consistent for publishing in documentation. To fix: Ensure the length of
  `summary` is at most 50. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
