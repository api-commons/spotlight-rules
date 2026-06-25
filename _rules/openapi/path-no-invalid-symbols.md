---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-invalid-symbols
title: Path No Invalid Symbols
severity: error
given: $.paths.
message: "{{error}}"
description: "Check if the given endpoint has queryparameter. It applies a
  custom validation to the `@key` field (evaluated at `$.paths.`). Severity:
  error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - trimble
builtin: false
---
