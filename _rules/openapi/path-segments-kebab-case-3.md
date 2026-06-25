---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-segments-kebab-case-3
title: Path Segments Kebab Case 3
severity: error
given: $.paths[?(/^((?!_webhooks).)*$/i.test(@property))]~
message: A resource containing multiple words MUST be separated using kebab-case
  (lower case and separated with hyphens).
description: "A resource containing multiple words MUST be separated using
  kebab-case (lower case and separated with hyphens). It requires the targeted
  value not to match `(\\/[a-z]+_.)|(\\/([a-z]|[A-Z])+[A-Z])` (evaluated at
  `$.paths[?(/^((?!_webhooks).)*$/i.test(@property))]~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
