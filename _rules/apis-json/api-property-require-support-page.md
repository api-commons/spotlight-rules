---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-page
title: API Property Require Support Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Page
description: This property ensures that there is a support page available for an
  API, providing direct and in-direct support opportunities for each API or for
  entire API platform
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
