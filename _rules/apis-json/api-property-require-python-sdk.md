---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-python-sdk
title: API Property Require Python SDK
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Python SDK
description: This property ensures that there is a Python SDK available for an
  API, making it easier for Python developers to integrate an API into their
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
