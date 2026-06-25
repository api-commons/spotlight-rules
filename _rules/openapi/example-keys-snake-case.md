---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: example-keys-snake-case
title: Example Keys Snake Case
severity: error
given: $.components['examples'].*~
message: "{{error}}"
description: "example key must be snake cased (e.g. snake_case). It applies a
  custom validation to the targeted value (evaluated at
  `$.components['examples'].*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - components
  - examples
source:
  - digitalocean
builtin: false
---
