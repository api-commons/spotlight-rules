---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-http-verbs
title: Path No HTTP Verbs
severity: warn
given: $.paths
message: "{{property}} has HTTP verb in path: {{error}}"
description: "HTTP verbs should be not be in URL paths. It applies a custom
  validation to the `@key` field (evaluated at `$.paths`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - trimble
builtin: false
---
