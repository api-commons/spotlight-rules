---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-description-max-length
title: Parameter Description Max Length
severity: warn
given: $.components.parameters.*
message: Parameters Description MUST Be Less Than 500 Characters
description: "Limiting the length of parameters description forces us to be more
  concise in how we describe each parameter, while keeping our documentation and
  other ways descriptions show up in discovery and portals more consistent. It
  constrains the length of the `summary` field and at most 500 (evaluated at
  `$.components.parameters.*`). Severity: warn."
experience:
  - documentation
  - consistency
spec:
  - parameters
  - components
source:
  - api-evangelist
builtin: false
---
