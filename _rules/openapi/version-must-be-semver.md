---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: version-must-be-semver
title: Version Must Be Semver
severity: error
given: $.info.version
message: Specs should follow semantic versioning. {{value}} is not a valid version.
description: "The API version field should follow [semantic
  versioning](https://semver.org/#semantic-versioning-specification-semver). It
  requires the targeted value to match the pattern
  `^[0-9]+.[0-9]+.[0-9]+(-[a-z0-9+.-]+)?` (evaluated at `$.info.version`).
  Severity: error."
experience:
  - versioning
  - consistency
spec:
  - info
source:
  - team-digitale
builtin: false
---
