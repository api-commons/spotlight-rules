---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-ref-resource-file
title: Operation Ref Resource File
severity: error
given: $.paths.*.$ref
message: "{{description}}; {{value}} incorrect"
description: "Endpoint must a $ref to a file in resources/. It requires the
  targeted value to match the pattern `^resources/.*yml$` (evaluated at
  `$.paths.*.$ref`). Severity: error."
experience:
  - consistency
  - governance
spec:
  - paths
source:
  - digitalocean
builtin: false
---
