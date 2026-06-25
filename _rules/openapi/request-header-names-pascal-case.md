---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-header-names-pascal-case
title: Request Header Names Pascal Case
severity: hint
given: $.[parameters][?(@.in=="header")].name
message: "{{value}} {{error}} in {{path}}"
description: 'Headers should be pascal-case. See Italian recommendation
  RAC_REST_NAME_003. It requires pascal casing on the targeted value (evaluated
  at `$.[parameters][?(@.in=="header")].name`). Severity: hint.'
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
source:
  - team-digitale
builtin: false
---
