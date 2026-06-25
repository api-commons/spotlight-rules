---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-privacy-policy
title: Include Privacy Policy
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Privacy Policy
description: This property provides a link to the privacy policy for an API,
  providing the legal details of how privacy is approached for each API
experience:
  - governance
  - documentation
spec:
  - apis
  - properties
source: []
builtin: false
---
