---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-mock-server
title: Include Mock Server
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Mock Server
description: This property ensures that an API has a reference to a mock servers
  for individual APIs or as part of common properties, providing mocked
  deployments of an API that can be used for making test API calls.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
