---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-segments-kebab-case
title: Path Segments Kebab Case
severity: warn
given: $.paths[*]~
message: "{{property}} is not kebab-case: {{error}}"
description: "All YAML/JSON paths MUST follow kebab-case. It requires the
  targeted value to match the pattern
  `^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$` (evaluated at
  `$.paths[*]~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - adidas
builtin: false
---
