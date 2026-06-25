---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: default-content-language-en-us
title: Default Content Language En Us
severity: error
given: $.paths[*][*].responses[*].headers.Content-Language.schema.default
message: ""
description: "Content-Language is optional but MUST default locale to en-US when
  none provided. It requires the targeted value to match the pattern `en-US`
  (evaluated at
  `$.paths[*][*].responses[*].headers.Content-Language.schema.default`).
  Severity: error."
experience:
  - consistency
  - usability
spec:
  - paths
  - responses
  - headers
  - media-types
  - schemas
source:
  - sps-commerce
builtin: false
---
