---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-params-declared-in-block
title: Path Params Declared In Block
severity: error
given: $.paths.
message: "{{error}}"
description: "Check for the path parameter in the parameter block. It applies a
  custom validation to the targeted value (evaluated at `$.paths.`). Severity:
  error."
experience:
  - consistency
  - documentation
spec:
  - paths
source:
  - trimble
builtin: false
---
