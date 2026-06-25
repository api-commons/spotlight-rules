---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-microcks-extension-valid
title: Info Microcks Extension Valid
severity: warn
given: $.info.x-microcks
message: x-microcks extension must be valid
description: "x-microcks extension must be valid. It validates the targeted
  value against a JSON Schema (evaluated at `$.info.x-microcks`). Severity:
  warn."
experience:
  - governance
  - consistency
spec:
  - info
source:
  - microcks
builtin: false
---
