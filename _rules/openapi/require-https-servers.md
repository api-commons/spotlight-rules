---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-https-servers
title: Require HTTPS Servers
severity: error
given: $.servers..url
message: Servers MUST be https and no other protocol is allowed.
description: "ALL requests MUST go through `https` protocol only. It requires
  the targeted value to match the pattern `/^https:/` (evaluated at
  `$.servers..url`). Severity: error."
experience:
  - security
spec:
  - servers
source:
  - adidas
builtin: false
---
