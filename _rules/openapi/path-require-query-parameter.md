---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-require-query-parameter
title: Path Require Query Parameter
severity: warn
given: $.paths
message: "{{error}}"
description: "Check if the given resource path has queryparameter. It applies a
  custom validation to the `@key` field (evaluated at `$.paths`). Severity:
  warn."
experience:
  - usability
  - consistency
spec:
  - paths
source:
  - trimble
builtin: false
---
