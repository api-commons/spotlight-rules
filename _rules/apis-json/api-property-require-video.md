---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-video
title: API Property Require Video
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Videos for API
description: This property ensures there is a reference to a video page or
  channel for an API.
experience:
  - documentation
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-video/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-video' (API Property Require Video).
  Requirement: This property ensures there is a reference to a video page or
  channel for an API. To fix: Ensure `type` does NOT match the regular
  expression `\\b(videos|Videos)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
---
