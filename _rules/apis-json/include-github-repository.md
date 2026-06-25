---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-github-repository
title: Include Github Repository
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Repository
description: This property ensures that an API possess a reference to a
  dedicated GitHub repository that is used to manage the Open, but also possible
  server and client code
experience:
  - discoverability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
