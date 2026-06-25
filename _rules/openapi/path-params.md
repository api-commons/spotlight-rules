---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-params
title: Path Params
severity: error
given: $.paths
message: "{{error}}"
description: Path parameters must be defined and valid.
experience:
  - reliability
  - consistency
spec:
  - paths
source: []
builtin: true
---
