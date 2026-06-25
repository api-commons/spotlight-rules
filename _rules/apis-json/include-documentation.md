---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-documentation
title: Include Documentation
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Documentation
description: This property ensures that there is documentation published for an
  API, and API consumers will have a set of human-readable instructions for
  onboarding and integrating with HTTP APIs in their applications
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
source: []
builtin: false
---
