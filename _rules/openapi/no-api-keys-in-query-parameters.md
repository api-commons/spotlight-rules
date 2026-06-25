---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-api-keys-in-query-parameters
title: No API Keys In Query Parameters
severity: error
given: $.paths.*.*.parameters[?(@.in=='query')].name
message: Query parameters MUST not contain sensitive information, like API
  tokens or keys.
description: "Query parameters MUST not contain sensitive information, like API
  tokens or keys. It requires the targeted value not to match `apiKey|token`
  (evaluated at `$.paths.*.*.parameters[?(@.in=='query')].name`). Severity:
  error."
experience:
  - security
  - governance
spec:
  - paths
  - parameters
source:
  - sps-commerce
builtin: false
---
