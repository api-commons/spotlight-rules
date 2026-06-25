---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: headers-no-x-prefix
title: Headers No X Prefix
severity: warn
given: $..parameters[?(@.in == 'header')].name
message: HTTP header '{{value}}' SHOULD NOT start with 'X-' in {{path}}
description: "'HTTP' headers SHOULD NOT start with 'X-' RFC6648. It requires the
  targeted value to match the pattern `/^([^x]|.[^-])|RateLimit-/i` (evaluated
  at `$..parameters[?(@.in == 'header')].name`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
source:
  - team-digitale
builtin: false
---
