---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-api-plans
title: Include API Plans
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Plans
description: This property provides a link to the dedicated plans page that
  applies to an API, providing information about access tiers, rate limits, and
  features available for an API as part of a wider API business plan
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
