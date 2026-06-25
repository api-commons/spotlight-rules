---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-not-include-query
title: Path Not Include Query
severity: warn
given: $.paths
message: ""
description: Path must not include query string.
experience:
  - consistency
  - naming
spec:
  - paths
source: []
builtin: true
---
