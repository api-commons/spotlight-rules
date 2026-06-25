---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-openapi-validator
title: Include Openapi Validator
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has OpenAPI (Technical) Validator
description: This property ensures that there is a link to the validator for the
  OpenAPI technical contract, allowing anyone to see the details of governance
  being applied
experience:
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
