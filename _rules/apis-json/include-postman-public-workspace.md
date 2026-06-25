---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-postman-public-workspace
title: Include Postman Public Workspace
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Public Postman Workspace
description: This property ensures that an API is associated with a Postman
  Workspace, providing a single location that API producers and/or API consumers
  can engage around an API
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
