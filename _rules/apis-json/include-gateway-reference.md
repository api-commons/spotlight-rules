---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-gateway-reference
title: Include Gateway Reference
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Staging Gateway for API
description: This property ensures that there is a reference to the gateway for
  an API, referencing where you can manage the configuration for each API
experience:
  - governance
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
