---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-vocabulary
title: API Property Require Vocabulary
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Vocabulary
description: This property ensures that there is a centralized vocabulary in use
  for guiding the creation and usage of tags, path segments, and other metadata
  associated with an APIs
experience:
  - consistency
  - naming
  - governance
spec:
  - apis
  - properties
source: []
builtin: false
---
