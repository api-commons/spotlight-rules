---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-realistic-examples
title: Require Realistic Examples
severity: warn
given: $..[?(@.example || @.examples)]
message: The {{property}} SHOULD include a real-like example. Add realistic
  examples to improve API usability.
description: "API design SHOULD include real-like examples for request and
  response definitions. It requires the `example` field to be present and
  non-empty (evaluated at `$..[?(@.example || @.examples)]`). Severity: warn."
experience:
  - documentation
  - usability
spec:
  - examples
source:
  - adidas
builtin: false
---
