---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-forbidden-http-headers
title: No Forbidden HTTP Headers
severity: error
given: $..parameters[?(@.in == 'header')].name | $.[responses][*].headers.*~
message: "{{error}} in {{path}} {{value}}"
description: "OAS do not allow using the following HTTP headers in a
  specification file: Authorization, Content-Type and Accept. You MUST use the
  associate functionalities provided by OAS, instead. It requires the targeted
  value not to match `/^(accept|content-type|authorization)$/i` (evaluated at
  `$..parameters[?(@.in == 'header')].name`, `$.[responses][*].headers.*~`).
  Severity: error."
experience:
  - consistency
  - governance
spec:
  - parameters
  - responses
  - headers
source:
  - team-digitale
builtin: false
---
