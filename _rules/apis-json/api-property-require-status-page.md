---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-status-page
title: API Property Require Status Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Status Page
description: This property ensures that there is a status page available for
  each API, providing the uptime status for any given moment, as well as
  historical data
experience:
  - reliability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
