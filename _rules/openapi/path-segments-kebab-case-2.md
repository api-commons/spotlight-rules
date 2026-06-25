---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-segments-kebab-case-2
title: Path Segments Kebab Case 2
severity: warn
given: $.paths[*]~
message: "{{property}} is not kebab-case: {{error}}"
description: "Paths should be kebab-case. See Italian recommendation
  RAC_REST_NAME_002. It requires the targeted value to match the pattern
  `^(/[a-z0-9-.]+|/{[a-zA-Z0-9_]+})+$` (evaluated at `$.paths[*]~`). Severity:
  warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - team-digitale
builtin: false
---
