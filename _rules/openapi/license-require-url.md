---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: license-require-url
title: License Require URL
severity: error
given: $.info.license
message: Info License MUST Have URL
description: "The license object should include a URL linking to the full
  license text so API consumers can review the terms. It requires the `url`
  field to be present and non-empty (evaluated at `$.info.license`). Severity:
  error."
experience:
  - governance
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
