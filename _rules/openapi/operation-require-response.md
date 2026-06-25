---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-response
title: Operation Require Response
severity: error
given: $.paths.*
message: "{{error}}"
description: "Check if every request has their respective responses. It applies
  a custom validation to the targeted value (evaluated at `$.paths.*`).
  Severity: error."
experience:
  - documentation
  - consistency
spec:
  - paths
source:
  - trimble
builtin: false
---
