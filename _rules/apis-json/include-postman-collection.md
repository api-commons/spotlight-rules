---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-postman-collection
title: Include Postman Collection
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Postman Collection
description: This property ensures that an API has at least one Postman
  Collection associated with it, providing automation, tests, and other
  executable derivatives of an APIs OpenAPI
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
