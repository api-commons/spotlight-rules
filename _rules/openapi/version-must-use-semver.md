---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: version-must-use-semver
title: Version Must Use Semver
severity: warn
given: $.info.version
message: Version should use semantic versioning. {{value}} is not a valid version.
description: "Version should use semantic versioning. {{value}} is not a valid
  version. It requires the targeted value to match the pattern
  `^([0-9]+.[0-9]+.[0-9]+)$` (evaluated at `$.info.version`). Severity: warn."
experience:
  - versioning
  - consistency
spec:
  - info
source:
  - sps-commerce
builtin: false
---
