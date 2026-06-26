---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-one-tag
title: Operation Require One Tag
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: MUST Be At Least One Operation Tag
description: Having tags applied to each API operations helps organize and group
  APIs in portals, documentation, search, and other ways in which APIs are made
  available.
experience:
  - discoverability
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-one-tag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-one-tag' (Operation Require One Tag).
  Requirement: Having tags applied to each API operations helps organize and
  group APIs in portals, documentation, search, and other ways in which APIs are
  made available. To fix: Ensure the length of `tags` is at least 1. This rule
  is evaluated at the JSONPath `$.paths.*[get,post,patch,put,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
