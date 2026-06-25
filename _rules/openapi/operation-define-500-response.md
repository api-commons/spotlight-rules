---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-define-500-response
title: Operation Define 500 Response
severity: warn
given: $.paths[*][*]
message: ""
description: "Every endpoint SHOULD have a 500 response. It requires the
  `responses.500` field to be present and non-empty (evaluated at
  `$.paths[*][*]`). Severity: warn."
experience:
  - error-handling
  - reliability
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
