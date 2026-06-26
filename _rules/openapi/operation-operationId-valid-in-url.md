---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-operationId-valid-in-url
title: Operation OperationId Valid In URL
severity: info
given: "#OperationObject"
message: operationId must not characters that are invalid when used in URL.
description: Operation OperationId Valid In URL.
experience:
  - naming
  - usability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-operationId-valid-in-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-operationId-valid-in-url' (Operation OperationId
  Valid In URL). Requirement: Operation OperationId Valid In URL. To fix: Ensure
  `operationId` matches the regular expression
  `^[A-Za-z0-9-._~:/?#\\[\\]@!\\$&'()*+,;=]*$`; rewrite any value that does not.
  This rule is evaluated at the JSONPath `#OperationObject` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: true
---
