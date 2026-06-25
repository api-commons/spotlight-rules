---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-developer-portal
title: Include Developer Portal
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Developer Portal
description: This property ensures there a developer portal associated with an
  API and that you can find a landing page for the API, documentation, SDKs, and
  other resources
experience:
  - discoverability
  - usability
spec:
  - apis
  - properties
source: []
builtin: false
---
