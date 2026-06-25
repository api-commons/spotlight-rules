---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-require-base-url
title: API Require Base URL
severity: error
given: $.apis.*
message: APIs MUST Have a Base URL
description: Each API defined within an APIs.json artifact can specify the base
  URL for the API. This URL serves as a reference point for developers during
  onboarding and when making API calls. Additionally, it helps identify the API
  and validate the domain it is associated with.
experience:
  - usability
  - discoverability
spec:
  - apis
source: []
builtin: false
---
