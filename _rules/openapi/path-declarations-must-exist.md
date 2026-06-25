---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-declarations-must-exist
title: Path Declarations Must Exist
severity: warn
given: $.paths
message: Path parameter declarations must not be empty, ex."/given/{}" is invalid.
description: ""
experience:
  - reliability
  - consistency
spec:
  - paths
source: []
builtin: true
---
