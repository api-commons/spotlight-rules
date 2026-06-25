---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-valid-schema-example
title: Valid Schema Example
severity: error
given: $.components.schemas..[?(@property !== 'properties' && @ && (@ &&
  @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format
  || @.$ref || @.properties || @.items))] | $..content..[?(@property !==
  'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) &&
  (@.enum || @.type || @.format || @.$ref || @.properties || @.items))] |
  $..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void 0
  || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref ||
  @.properties || @.items))] | $..parameters..[?(@property !== 'properties' && @
  && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type ||
  @.format || @.$ref || @.properties || @.items))]
message: "{{error}}"
description: Examples must be valid against their defined schema.
experience:
  - data-modeling
  - documentation
  - reliability
spec:
  - parameters
  - headers
  - media-types
  - schemas
  - components
  - examples
source: []
builtin: true
---
