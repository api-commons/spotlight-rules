---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: property-names-camel-case
title: Property Names Camel Case
severity: error
given: $.paths.*.*[responses,requestBody]..content..schema..properties.*~
message: Property name has to be ASCII camelCase
description: "MUST property names must be ASCII camelCase [118a]. It requires
  the targeted value to match the pattern
  `^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$` (evaluated at
  `$.paths.*.*[responses,requestBody]..content..schema..properties.*~`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - request-body
  - responses
  - media-types
  - schemas
source:
  - baloise
builtin: false
---
