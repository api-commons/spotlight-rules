---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-header-names-pascal-case
title: Response Header Names Pascal Case
severity: hint
given: $.[responses][*].headers.*~
message: "Header {{error}}: {{path}}"
description: "Headers should be pascal-case. See Italian recommendation
  RAC_REST_NAME_003. It requires pascal casing on the targeted value (evaluated
  at `$.[responses][*].headers.*~`). Severity: hint."
experience:
  - naming
  - consistency
spec:
  - responses
  - headers
source:
  - team-digitale
builtin: false
---
