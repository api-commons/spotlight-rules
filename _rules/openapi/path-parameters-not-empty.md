---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameters-not-empty
title: Path Parameters Not Empty
severity: error
given: $.paths
message: ""
description: "Path parameter declarations must not be empty ex. `/api/{}` is
  invalid. It requires the targeted value not to match `{}` (evaluated at
  `$.paths`). Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
source:
  - paystack
builtin: false
---
