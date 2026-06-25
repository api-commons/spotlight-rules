---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: ref-property-standard-schema
title: Ref Property Standard Schema
severity: error
given: $..[?(@property=== "format" && @ == "sps-ref")]^
message: "{{property}} is not provided or not following required schema values."
description: "Properties following 'sps-ref' format MUST use the standardized
  schema - maxLength (255), minLength(7), pattern (includes 'sps'), type
  (string). It validates the targeted value against a JSON Schema, and requires
  the `pattern` field to match the pattern `sps`, and requires the `type` field
  to match the pattern `^string$` (evaluated at `$..[?(@property=== \"format\"
  && @ == \"sps-ref\")]^`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
