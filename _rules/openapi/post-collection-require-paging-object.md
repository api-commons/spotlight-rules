---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: post-collection-require-paging-object
title: Post Collection Require Paging Object
severity: error
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}$/))].post.requestBody.content.application/json.schema.properties.paging
message: ""
description: "POST collection endpoints MUST have a request body schema that
  includes paging parameters. It requires the `type` field to match the pattern
  `object` (evaluated at
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}$/))].post.requestBody.content.a\
  pplication/json.schema.properties.paging`). Severity: error."
experience:
  - pagination
  - data-modeling
spec:
  - paths
  - operations
  - request-body
  - media-types
  - schemas
source:
  - sps-commerce
builtin: false
---
