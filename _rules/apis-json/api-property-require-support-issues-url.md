---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-support-issues-url
title: API Property Require Support Issues URL
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Support Issues URL
description: This property ensures that there are Git issues available to
  support an API, using the issues capability of GitHub, GitLab, or Bitbucket to
  support API consumers
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
