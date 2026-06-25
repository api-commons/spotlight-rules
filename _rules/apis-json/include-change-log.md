---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-change-log
title: Include Change Log
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Change Log
description: This property ensures that than an individual API or API operations
  possesses a change log that catalogs all the changes that have occurred in a
  recent time frame, with historical and version information available if
  possible
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
