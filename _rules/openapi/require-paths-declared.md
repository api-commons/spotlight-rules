---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-paths-declared
title: Require Paths Declared
severity: error
given: $.paths
message: OpenAPI Path Declarations Error
description: "There must be a paths property and have paths declared, providing
  the minimum viable definition for an API. It requires the `@key` field not to
  match `{}` (evaluated at `$.paths`). Severity: error."
experience:
  - governance
  - documentation
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
