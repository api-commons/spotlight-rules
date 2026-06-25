---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-valid-url
title: API Property Require Valid URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Property URLs Are Valid
description: This property ensures that properties of an API or API contract all
  have valid URLs, checking if any of the URLs are not properly formed, or could
  be other formats
experience:
  - consistency
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
