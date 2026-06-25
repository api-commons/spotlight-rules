---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-version-comparison
title: Include Version Comparison
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Comparison
description: This property ensures that an API has the ability to compare two
  different versions of an API and see what the difference are between them
experience:
  - versioning
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
