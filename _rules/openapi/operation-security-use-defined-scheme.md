---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-security-use-defined-scheme
title: Operation Security Use Defined Scheme
severity: error
given: $.paths[*][*]..security.*
message: ""
description: "Check operation security uses a defined security scheme. It
  validates the targeted value against a JSON Schema (evaluated at
  `$.paths[*][*]..security.*`). Severity: error."
experience:
  - security
  - consistency
spec:
  - security
  - paths
source:
  - digitalocean
builtin: false
---
