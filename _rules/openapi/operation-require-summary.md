---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-summary
title: Operation Require Summary
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have a Summary
description: "Having short and intuitive summary for each API operation helps
  API consumers understand what is possible with each API request. It requires
  the `summary` field to be present and non-empty (evaluated at
  `$.paths.*[get,post,patch,put,delete]`). Severity: error."
experience:
  - documentation
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
