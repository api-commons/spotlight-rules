---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-names-pascal-case
title: Response Names Pascal Case
severity: warn
given: $.components.responses.*~
message: "{{property}} is not PascalCase: {{error}}"
description: "Response names SHOULD be written in PascalCase. It requires the
  targeted value to match the pattern `^[A-Z][a-zA-Z0-9]*$` (evaluated at
  `$.components.responses.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - responses
  - components
source:
  - sps-commerce
builtin: false
---
