---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-api-identifier
title: Info Require API Identifier
severity: error
given: $
message: "API must have an unique identifier in x-api-id in #/info/x-api-id."
description: "The `#/info/x-api-id` field can be used to associate an identifier
  to an API. This is useful to track an API even when its `#/info/title`
  changes. It requires the `info.x-api-id` field to be present and non-empty
  (evaluated at `$`). Severity: error."
experience:
  - discoverability
  - governance
spec:
  - document
source:
  - team-digitale
builtin: false
---
