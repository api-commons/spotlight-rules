---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-tags-object
title: Require Tags Object
severity: error
given: $
message: OpenAPIs MUST Have a Tag Object
description: "There needs to be a central tags object applied to the OpenAPI,
  providing central tags that can be applied across all operations within an
  OpenAPI. It requires the `tags` field to be present and non-empty (evaluated
  at `$`). Severity: error."
experience:
  - discoverability
  - consistency
spec:
  - document
source:
  - api-evangelist
builtin: false
---
