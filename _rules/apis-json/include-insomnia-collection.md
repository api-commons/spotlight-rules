---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-insomnia-collection
title: Include Insomnia Collection
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Insomnia Collection
description: This property defines an Insomnia collection available for each
  API, providing executable artifacts that can be used in the Insomnia client
  for making calls, and executing automation workflows
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
