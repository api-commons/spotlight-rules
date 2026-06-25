---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-security-page
title: API Property Require Security Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Security Path
description: This property ensures there is a URL to the security page,
  providing details about how security is handled for an API
experience:
  - security
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
