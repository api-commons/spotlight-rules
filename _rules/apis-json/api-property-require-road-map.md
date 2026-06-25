---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-road-map
title: API Property Require Road Map
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Road Map
description: This property ensures there is a reference to the road map for an
  API or for the entire API operations within domain, line of business, or teams
experience:
  - discoverability
  - documentation
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
