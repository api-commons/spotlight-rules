---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-at-least-one-tag
title: Require At Least One Tag
severity: error
given: $
message: MUST Be At Least One Tag
description: "There needs to be at least one tag applied to an OpenAPI,
  providing a key word or phrase that can be applied to API operations. It
  constrains the length of the `tags` field to at least 1 (evaluated at `$`).
  Severity: error."
experience:
  - discoverability
  - consistency
spec:
  - document
source:
  - api-evangelist
builtin: false
---
