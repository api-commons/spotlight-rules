---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-info-license-url
title: Asyncapi Info License URL
severity: info
given: $
message: License object must include "url".
description: License object must include "url".
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-license-url/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-info-license-url' (Asyncapi Info License URL).
  Requirement: License object must include \"url\". To fix: Ensure
  `info.license.url` is present and non-empty at each matching location. Make
  the smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
