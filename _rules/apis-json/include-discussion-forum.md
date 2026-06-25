---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-discussion-forum
title: Include Discussion Forum
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Discussion Forum
description: This property ensures that there is a link to a discussion forum,
  providing a way for consumers and producers to engage and support either other
  throughout the lifecycle
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
