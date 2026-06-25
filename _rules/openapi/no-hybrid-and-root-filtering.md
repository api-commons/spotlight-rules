---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-hybrid-and-root-filtering
title: No Hybrid And Root Filtering
severity: error
given: $.paths..get.parameters^
message: ""
description: 'Hybrid filtering MAY be offered on multiple attributes, but MUST
  never exist if a root "filter" query parameter is present. It validates the
  targeted value against a JSON Schema (evaluated at
  `$.paths..get.parameters^`). Severity: error.'
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
source:
  - sps-commerce
builtin: false
---
