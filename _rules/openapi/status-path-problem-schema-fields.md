---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: status-path-problem-schema-fields
title: Status Path Problem Schema Fields
severity: warn
given: $.paths.'/status'.get.responses.200.content.[[schema]]
message: "{{error}} {{path}}"
description: "\"/status\" schema is not a Problem object. It requires the
  `properties.status` field to be present and non-empty, and requires the
  `properties.title` field to be present and non-empty, and requires the
  `properties.detail` field to be present and non-empty (evaluated at
  `$.paths.'/status'.get.responses.200.content.[[schema]]`). Severity: warn."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
  - media-types
  - schemas
source:
  - team-digitale
builtin: false
---
