---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-description
title: Parameter Require Description
severity: warn
given: $.paths.*.*.parameters.*
message: Parameters MUST Have a Description
description: "Having a parameters description provides more depth to what a
  parameter does and will be displayed via documentation, and other tooling used
  across the API lifecycle. It requires the `description` field to be present
  and non-empty (evaluated at `$.paths.*.*.parameters.*`). Severity: warn."
experience:
  - documentation
spec:
  - paths
  - parameters
source:
  - api-evangelist
builtin: false
---
