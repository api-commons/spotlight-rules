---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-enum-upper-snake-case
title: Parameter Enum Upper Snake Case
severity: error
given: $.components.parameters.*.enum.*
message: Parameters Enums MUST Must Be Upper Snake Case
description: "Keeping parameters enumerator casing consistent across APIs helps
  reduce confusion by consumers, and can keep aligned with services and
  applications putting an API to work. It requires the targeted value not to
  match `^[A-Z]+(?:_[A-Z]+)*$` (evaluated at
  `$.components.parameters.*.enum.*`). Severity: error."
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
