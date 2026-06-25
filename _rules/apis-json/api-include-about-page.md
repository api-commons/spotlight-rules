---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-include-about-page
title: API Include About Page
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has About
description: This property ensures provides a reference to an about page, either
  for the company, organization, or government agency behind an API, or
  specifically about the domain, team, and the APIs they produce
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
source: []
builtin: false
---
