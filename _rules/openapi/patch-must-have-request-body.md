---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-must-have-request-body
title: Patch Must Have Request Body
severity: error
given: $.paths[*].patch
message: ""
description: "PATCH operations must have a request body. It validates the
  `requestBody` field against a JSON Schema (evaluated at `$.paths[*].patch`).
  Severity: error."
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
source:
  - sps-commerce
builtin: false
---
