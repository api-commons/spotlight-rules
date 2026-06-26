---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-operationId-unique
title: Operation OperationId Unique
severity: info
given: $.paths
message: Every operation must have unique "operationId".
description: Every operation must have unique "operationId".
experience:
  - consistency
  - naming
  - reliability
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-operationId-unique/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-operationId-unique' (Operation OperationId Unique).
  Requirement: Every operation must have unique \"operationId\". This rule is
  evaluated at the JSONPath `$.paths` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
