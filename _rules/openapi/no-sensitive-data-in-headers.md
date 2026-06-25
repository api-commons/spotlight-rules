---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-sensitive-data-in-headers
title: No Sensitive Data In Headers
severity: error
given: $.paths[*][*].responses[*].headers.*~
message: ""
description: "Headers MUST NOT contain sensitive data. It requires the targeted
  value not to match `^(SPS-Token|SPS-Password|SPS-Identity|Password)$`
  (evaluated at `$.paths[*][*].responses[*].headers.*~`). Severity: error."
experience:
  - security
  - governance
spec:
  - paths
  - responses
  - headers
source:
  - sps-commerce
builtin: false
---
