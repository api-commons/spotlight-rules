---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-require-name
title: Parameter Require Name
severity: error
given: $.components.parameters.*
message: Parameters MUST Have a Name
description: "Providing a simple, intuitive, and consistent names for your
  parameters helps make it easier for API consumers to understand how they are
  able to configure their API requests. It requires the `name` field to be
  present and non-empty (evaluated at `$.components.parameters.*`). Severity:
  error."
experience:
  - naming
  - documentation
spec:
  - parameters
  - components
source:
  - api-evangelist
builtin: false
---
