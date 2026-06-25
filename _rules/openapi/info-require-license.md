---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-license
title: Info Require License
severity: error
given: $.info
message: Info MUST Have License
description: "Having a license defined in the info object clarifies the terms
  under which the API can be used. Analysis shows only 44.4% of APIs define a
  license, but it is essential for API governance and compliance. It requires
  the `license` field to be present and non-empty (evaluated at `$.info`).
  Severity: error."
experience:
  - governance
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
