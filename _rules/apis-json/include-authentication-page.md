---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-authentication-page
title: Include Authentication Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Authentication
description: This property ensures that there is a human readable authentication
  page available that will provide what type of authentication is used and how
  it can be applied, as well as any services or tooling that API consumers can
  use to troubleshoot authentication with APIs
experience:
  - security
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
