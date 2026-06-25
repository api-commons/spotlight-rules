---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-version
title: Info Require Version
severity: error
given: $.info
message: Info MUST Have Version
description: "Publishing a version for your OpenAPI technical contract helps you
  communicate change with consumers using Semantic or date-based versioning
  published to the info version property. It requires the `version` field to be
  present and non-empty (evaluated at `$.info`). Severity: error."
experience:
  - versioning
spec:
  - info
source:
  - api-evangelist
builtin: false
---
