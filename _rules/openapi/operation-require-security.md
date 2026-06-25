---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-security
title: Operation Require Security
severity: error
given: $.paths.*.*
message: ""
description: "Check operation security is defined. It requires the `security`
  field to be present and non-empty (evaluated at `$.paths.*.*`). Severity:
  error."
experience:
  - security
  - governance
spec:
  - paths
source:
  - digitalocean
builtin: false
---
