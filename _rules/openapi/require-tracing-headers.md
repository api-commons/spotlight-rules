---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-tracing-headers
title: Require Tracing Headers
severity: error
given: $.paths.*
message: Header X-B3-Traceid, X-B3-Spanid or traceparent (w3c) missing
description: "MUST use b3 or w3c tracing [233a]. It applies a custom validation
  to the targeted value (evaluated at `$.paths.*`). Severity: error."
experience:
  - reliability
  - governance
spec:
  - paths
source:
  - baloise
builtin: false
---
