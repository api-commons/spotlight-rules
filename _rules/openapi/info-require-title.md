---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-title
title: Info Require Title
severity: error
given: $.info
message: Info MUST Have Title
description: "Having a intuitive and helpful title for your API using the
  OpenAPI info title is the first impression you will make on the consumers of
  your API. It requires the `title` field to be present and non-empty (evaluated
  at `$.info`). Severity: error."
experience:
  - documentation
  - discoverability
spec:
  - info
source:
  - api-evangelist
builtin: false
---
