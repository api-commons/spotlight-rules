---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-getting-started
title: Include Getting Started
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Getting Started
description: This property ensures that there is a getting started link
  available, providing a reference for API consumers to get started with an API
  is as few steps as possible
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
source: []
builtin: false
---
