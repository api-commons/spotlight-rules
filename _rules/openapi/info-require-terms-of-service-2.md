---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-terms-of-service-2
title: Info Require Terms Of Service 2
severity: error
given: $.info
message: Info MUST Have Terms of Service
description: "Having terms of service defined helps API consumers understand
  usage policies. Analysis shows 51.1% of APIs include terms of service, and it
  should be standard for any production API. It requires the `termsOfService`
  field to be present and non-empty (evaluated at `$.info`). Severity: error."
experience:
  - governance
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
