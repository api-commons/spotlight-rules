---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-id-camel-case
title: Operation ID Camel Case
severity: info
given: $.paths.*[get,post,patch,put,delete].operationId
message: Operation Identifier MUST Be camelCase
description: Operation identifiers provide a unique way to identify each
  individual API, and requiring them to have consistent casing reduces friction
  when generating SDKs and automating around APIs.
experience:
  - naming
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-id-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-id-camel-case' (Operation ID Camel Case).
  Requirement: Operation identifiers provide a unique way to identify each
  individual API, and requiring them to have consistent casing reduces friction
  when generating SDKs and automating around APIs. To fix: Ensure the targeted
  value matches the regular expression `^[a-z]+(?:[A-Z][a-z]+)*$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete].operationId` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
