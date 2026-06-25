---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-no-query-string
title: Paths No Query String
severity: error
given: $.paths
message: ""
description: "Path must not include query string. It requires the targeted value
  not to match `\\?` (evaluated at `$.paths`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - paystack
builtin: false
---
