---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-github-organization
title: Include Github Organization
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Organization
description: This property ensures that an API is associated with GitHub
  organization, providing the URL to where you can engage with the operations
  surrounding an API
experience:
  - discoverability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
