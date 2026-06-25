---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oauth-endpoints-require-https
title: Oauth Endpoints Require HTTPS
severity: error
given: $.[securitySchemes][?(@.type=="oauth2")][*].[?(@property.match(/url$/i))]
message: OAuth endpoints must use https://
description: 'OAuth2 endpoints must use `https://`. It requires the `value`
  field to match the pattern `^https://` (evaluated at
  `$.[securitySchemes][?(@.type=="oauth2")][*].[?(@property.match(/url$/i))]`).
  Severity: error.'
experience:
  - security
spec:
  - security
source:
  - team-digitale
builtin: false
---
