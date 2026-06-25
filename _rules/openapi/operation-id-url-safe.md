---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-id-url-safe
title: Operation ID URL Safe
severity: error
given: $.paths[*][*]
message: ""
description: "OperationId must use URL friendly characters. It requires the
  `operationId` field to match the pattern
  `^[A-Za-z0-9-._~:/?#\\[\\]@!\\$&'()*+,;=]*$` (evaluated at `$.paths[*][*]`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - paystack
builtin: false
---
