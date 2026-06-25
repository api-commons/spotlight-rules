---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: gateway-from-allowed-list
title: Gateway From Allowed List
severity: warn
given: $
message: ""
description: "The 'x-gateway' property, if present, MUST have a value in the
  enumeration: kong, nginx, aws, akamai, sap, other. It requires the `x-gateway`
  field to be one of [\"kong\",\"nginx\",\"aws\",\"akamai\",\"sap\",\"other\"]
  (evaluated at `$`). Severity: warn."
experience:
  - governance
  - consistency
spec:
  - document
source:
  - adidas
builtin: false
---
