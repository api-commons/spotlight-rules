---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-names-camel-case
title: Parameter Names Camel Case
severity: error
given: $.components.parameters.*
message: Parameters Names MUST Be Camel Case
description: "Providing parameters with consistent naming helps make it easier
  for API consumers to understand how they are able to configure their API
  requests. It requires the `name` field not to match
  `^[a-z]+(?:[A-Z][a-z]+)*$`, and requires the `name` field to match the pattern
  `^[A-Z](([a-z0-9]+[A-Z]?)*)$` (evaluated at `$.components.parameters.*`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
source:
  - api-evangelist
builtin: false
---
