---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-openapi-definition
title: Include Openapi Definition
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has An OpenAPI
description: This property ensures that there is an OpenAPI present for an API,
  providing the technical contract that describes the surface area of an API
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
