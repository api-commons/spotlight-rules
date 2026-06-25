---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-require-valid-http-verb
title: Path Require Valid HTTP Verb
severity: warn
given: $.paths.*
message: "{{error}}"
description: "All APIs MUST have a valid http verb. It applies a custom
  validation to the `@key` field (evaluated at `$.paths.*`). Severity: warn."
experience:
  - consistency
  - governance
spec:
  - paths
source:
  - trimble
builtin: false
---
