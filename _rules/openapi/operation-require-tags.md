---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-tags
title: Operation Require Tags
severity: error
given: $.paths.*[get,post,patch,put,delete]
message: Operations MUST Have Tags
description: "Having tags applied to each API operations helps organize and
  group APIs in portals, documentation, search, and other ways in which APIs are
  made available. It requires the `tags` field to be present and non-empty
  (evaluated at `$.paths.*[get,post,patch,put,delete]`). Severity: error."
experience:
  - discoverability
  - documentation
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
