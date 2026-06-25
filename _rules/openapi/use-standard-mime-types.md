---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-standard-mime-types
title: Use Standard Mime Types
severity: error
given: $.paths[*][*].responses[*].content.*~
message: ""
description: "MIME types MUST be standard (application/json,
  application/problem+json, application/problem+xml) or use custom format
  application/vnd.*. It requires the targeted value to match the pattern
  `^application/(json|problem\\+json|problem\\+xml|vnd\\..*)$` (evaluated at
  `$.paths[*][*].responses[*].content.*~`). Severity: error."
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - responses
  - media-types
source:
  - sps-commerce
builtin: false
---
