---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-info-object
title: Require Info Object
severity: error
given: $
message: Info Object MUST Exist
description: "Having an info object provides much of the metadata needed for the
  collection of APIs described in an OpenAPI. It requires the `info` field to be
  present and non-empty (evaluated at `$`). Severity: error."
experience:
  - documentation
  - governance
spec:
  - document
source:
  - api-evangelist
builtin: false
---
