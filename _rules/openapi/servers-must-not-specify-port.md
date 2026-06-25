---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: servers-must-not-specify-port
title: Servers Must Not Specify Port
severity: error
given: $.servers..url
message: Port MUST NOT be specified or required to use the API, except for
  'localhost' testing in a spec.
description: "Port MUST NOT be specified or required to use the API, except for
  'localhost' testing in a spec. It requires the targeted value not to match
  `(?!https?://localhost)(https?://.*):(\\d*)\\/?(.*)` (evaluated at
  `$.servers..url`). Severity: error."
experience:
  - usability
  - consistency
spec:
  - servers
source:
  - sps-commerce
builtin: false
---
