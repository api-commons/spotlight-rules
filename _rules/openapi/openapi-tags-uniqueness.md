---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: openapi-tags-uniqueness
title: Openapi Tags Uniqueness
severity: error
given: $.tags
message: "{{error}}"
description: Each tag must have a unique name.
experience:
  - consistency
  - discoverability
spec:
  - tags
source: []
builtin: true
---
