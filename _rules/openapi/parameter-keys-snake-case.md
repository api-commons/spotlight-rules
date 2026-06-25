---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-keys-snake-case
title: Parameter Keys Snake Case
severity: error
given: $.components['parameters'].*~
message: "{{error}}"
description: "parameter key must be snake cased (e.g. snake_case). It applies a
  custom validation to the targeted value (evaluated at
  `$.components['parameters'].*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
source:
  - digitalocean
builtin: false
---
