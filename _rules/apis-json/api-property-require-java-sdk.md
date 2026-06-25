---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-java-sdk
title: API Property Require Java SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Java SDK
description: This property ensures that there is a Java SDK available for an
  API, making it easier for Java developers to integrate an API into their
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
