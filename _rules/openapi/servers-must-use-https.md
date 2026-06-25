---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: servers-must-use-https
title: Servers Must Use HTTPS
severity: error
given: $.servers..url
message: Servers MUST be https and no other protocol is allowed unless using localhost.
description: "Servers MUST be https and no other protocol is allowed unless
  using localhost. It requires the targeted value to match the pattern
  `^(https:|http://localhost)` (evaluated at `$.servers..url`). Severity:
  error."
experience:
  - security
  - reliability
spec:
  - servers
source:
  - sps-commerce
builtin: false
---
