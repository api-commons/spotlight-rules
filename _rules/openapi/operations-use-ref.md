---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operations-use-ref
title: Operations Use Ref
severity: error
given: $.paths.*.*
message: "{{description}}; {{property}} incorrect"
description: "Endpoint must be a $ref. It requires the `$ref` field to be
  present and non-empty (evaluated at `$.paths.*.*`). Severity: error."
experience:
  - consistency
  - governance
spec:
  - paths
source:
  - digitalocean
builtin: false
---
