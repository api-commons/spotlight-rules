---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-interface-license
title: Include Interface License
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Interface License
description: This property ensures that an API Commons interface license exists
  for an API, providing a machine-readable reference for an API, as well as
  data, backend, and front-end code
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
