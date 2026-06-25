---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: fingerprint-property-must-be-string
title: Fingerprint Property Must Be String
severity: error
given: $..[?(@property === "fingerprint")].type
message: ""
description: 'Fingerprint values MUST use a data type of `string`. It requires
  the targeted value to match the pattern `^string$` (evaluated at
  `$..[?(@property === "fingerprint")].type`). Severity: error.'
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
