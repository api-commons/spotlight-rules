---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-one-tag
title: Operation Require One Tag
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: MUST Be At Least One Operation Tag
description: "Having tags applied to each API operations helps organize and
  group APIs in portals, documentation, search, and other ways in which APIs are
  made available. It constrains the length of the `tags` field to at least 1
  (evaluated at `$.paths.*[get,post,patch,put,delete]`). Severity: error."
experience:
  - discoverability
  - consistency
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
