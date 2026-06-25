---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-must-be-lowercase
title: Server URL Must Be Lowercase
severity: warn
given: $.servers..url
message: Server URL SHOULD BE lowercase.
description: "Server URL SHOULD BE lowercase. It requires the targeted value to
  match the pattern `^[^A-Z]*$` (evaluated at `$.servers..url`). Severity:
  warn."
experience:
  - naming
  - consistency
spec:
  - servers
source:
  - sps-commerce
builtin: false
---
