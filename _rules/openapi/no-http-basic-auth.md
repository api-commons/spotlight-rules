---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-http-basic-auth
title: No HTTP Basic Auth
severity: error
given: $.components.securitySchemes[*]
message: HTTP Basic is an insecure way to pass credentials around, use an alternative.
description: "Consider a more secure alternative to HTTP Basic. It requires the
  `scheme` field not to match `basic` (evaluated at
  `$.components.securitySchemes[*]`). Severity: error."
experience:
  - security
spec:
  - security
  - components
source:
  - sps-commerce
builtin: false
---
