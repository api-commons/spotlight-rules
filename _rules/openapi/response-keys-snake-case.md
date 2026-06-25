---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-keys-snake-case
title: Response Keys Snake Case
severity: error
given: $.components['responses'].*~
message: "{{error}}"
description: "response key must be snake cased (e.g. snake_case). It applies a
  custom validation to the targeted value (evaluated at
  `$.components['responses'].*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - responses
  - components
source:
  - digitalocean
builtin: false
---
