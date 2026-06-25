---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-summary
title: Info Require Summary
severity: error
given: $
message: "API MUST have an one-liner #/info/x-summary field containing a brief
  description."
description: "The `#/info/x-summary` can be used to specify a brief, one-liner
  description of your API: this is very useful for catalog purposes (eg. this
  can be shown as your API subtitle in catalogs and developer portals). In
  OAS3.1 you can use the standard `#/info/summary` field. It requires the
  `info.x-summary` field to be present and non-empty (evaluated at `$`).
  Severity: error."
experience:
  - documentation
  - discoverability
spec:
  - document
source:
  - team-digitale
builtin: false
---
