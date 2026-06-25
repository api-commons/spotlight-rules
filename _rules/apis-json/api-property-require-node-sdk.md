---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-node-sdk
title: API Property Require Node SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Node SDK
description: This property ensures that there is a Node SDK available for an
  API, making it easier for Node developers to integrate an API into their
  applications
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
