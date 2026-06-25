---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: avoid-integer-id-parameters
title: Avoid Integer ID Parameters
severity: warn
given: $.paths..parameters[*].[?(@property === "name" && (@ === "id" || @ ===
  "ID" || @ === "Id"))]^.schema
message: ""
description: 'Avoid exposing IDs as an integer, UUIDs or other interoperable
  strings are preferred. It validates the targeted value against a JSON Schema
  (evaluated at `$.paths..parameters[*].[?(@property === "name" && (@ === "id"
  || @ === "ID" || @ === "Id"))]^.schema`). Severity: warn.'
experience:
  - security
  - data-modeling
spec:
  - paths
  - parameters
  - schemas
source:
  - sps-commerce
builtin: false
---
