---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-headers-no-x-prefix
title: Response Headers No X Prefix
severity: warn
given: $.[responses][*].headers.*~
message: HTTP response header SHOULD NOT start with 'X-' in {{path}}
description: "'HTTP' headers SHOULD NOT start with 'X-' RFC6648. It requires the
  targeted value to match the pattern `/^([^x]|.[^-])|RateLimit-/i` (evaluated
  at `$.[responses][*].headers.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - responses
  - headers
source:
  - team-digitale
builtin: false
---
