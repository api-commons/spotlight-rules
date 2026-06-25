---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: status-path-return-problem-type
title: Status Path Return Problem Type
severity: error
given: $.paths.'/status'.get.responses.200.content.*~
message: "{{error}}"
description: "\"/status\" must return a Problem object. It requires the targeted
  value to be one of [\"application/problem+xml\",\"application/problem+json\"]
  (evaluated at `$.paths.'/status'.get.responses.200.content.*~`). Severity:
  error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
source:
  - team-digitale
builtin: false
---
