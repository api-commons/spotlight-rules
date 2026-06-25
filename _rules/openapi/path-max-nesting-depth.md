---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-max-nesting-depth
title: Path Max Nesting Depth
severity: error
given: $.paths
message: Path Nesting MUST NOT Exceed 4 Levels
description: "API paths should not exceed 4 levels of nesting depth. Analysis of
  6627 paths across 773 specs shows an average depth of 3.04 segments, with
  deeper paths indicating overly complex resource hierarchies. It requires the
  targeted value not to match `^(/[^/]+){5,}` (evaluated at `$.paths`).
  Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
