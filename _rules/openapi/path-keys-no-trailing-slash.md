---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-keys-no-trailing-slash
title: Path Keys No Trailing Slash
severity: warn
given: $.paths
message: Path must not end with slash.
description: ""
experience:
  - consistency
  - naming
spec:
  - paths
source: []
builtin: true
---
