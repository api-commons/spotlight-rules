---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-terms-of-service
title: Info Require Terms Of Service
severity: error
given: $
message: "API MUST reference the URL of the Terms of Service  in #/info/termsOfService."
description: "API MUST reference the URL of the Terms of Service in
  `#/info/termsOfService`. It requires the `info.termsOfService` field to be
  present and non-empty (evaluated at `$`). Severity: error."
experience:
  - documentation
  - governance
spec:
  - document
source:
  - team-digitale
builtin: false
---
