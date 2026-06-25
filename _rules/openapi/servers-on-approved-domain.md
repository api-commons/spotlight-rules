---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: servers-on-approved-domain
title: Servers On Approved Domain
severity: warn
given: $.servers..url
message: APIs SHOULD be accessible under api.spscommerce.com.
description: "APIs SHOULD be accessible under api.spscommerce.com. It requires
  the targeted value to match the pattern
  `api.spscommerce.com|api.sps-internal.com|localhost` (evaluated at
  `$.servers..url`). Severity: warn."
experience:
  - governance
  - consistency
spec:
  - servers
source:
  - sps-commerce
builtin: false
---
