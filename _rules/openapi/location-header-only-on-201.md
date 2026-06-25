---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: location-header-only-on-201
title: Location Header Only On 201
severity: error
given: $.paths[*][*].responses[?(@property !== '201')].headers
message: ""
description: "Location header MUST NOT be present in non-201 responses. It
  requires the `Location` field to be absent or empty (evaluated at
  `$.paths[*][*].responses[?(@property !== '201')].headers`). Severity: error."
experience:
  - consistency
  - error-handling
spec:
  - paths
  - responses
  - headers
source:
  - sps-commerce
builtin: false
---
