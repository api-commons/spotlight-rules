---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-description
title: Operation Require Description
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: Operation MUST Have Description
description: "Having a paragraph or two description of each API operation helps
  API consumers understand what is possible with each API request. It requires
  the `description` field to be present and non-empty (evaluated at
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
