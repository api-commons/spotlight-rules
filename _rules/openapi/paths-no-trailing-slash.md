---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-no-trailing-slash
title: Paths No Trailing Slash
severity: warn
given: $.paths
message: ""
description: "Path must not end with a slash. It requires the targeted value not
  to match `.+\\/$` (evaluated at `$.paths`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - paystack
builtin: false
---
