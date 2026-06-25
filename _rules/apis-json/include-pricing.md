---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-pricing
title: Include Pricing
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Pricing
description: This property provides a link to a pricing page that applies to an
  API, providing a breakdown of the costs associated with using an API
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
