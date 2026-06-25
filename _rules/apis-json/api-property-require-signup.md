---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-signup
title: API Property Require Signup
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Sign Up
description: This property ensures there is a link to where you sign up for an
  API, making sure API consumers can access in a single click
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
