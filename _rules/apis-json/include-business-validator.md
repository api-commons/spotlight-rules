---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-business-validator
title: Include Business Validator
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has APIs.json (Business) Validator
description: This property ensures that there is a link to the validator for the APIs
experience:
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
