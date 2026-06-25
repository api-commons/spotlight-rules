---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-keys-snake-case
title: Schema Keys Snake Case
severity: error
given: $.components['schemas'].*~
message: "{{error}}"
description: "schema key must be snake cased (e.g. snake_case). It applies a
  custom validation to the targeted value (evaluated at
  `$.components['schemas'].*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
source:
  - digitalocean
builtin: false
---
