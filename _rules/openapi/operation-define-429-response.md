---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-define-429-response
title: Operation Define 429 Response
severity: error
given: $.paths.*[get,post,put,patch,delete].responses
message: Operations MUST Have 429 Response
description: "APIs should define a 429 Too Many Requests response to document
  rate limiting behavior. Analysis shows 429 appears in 671 operations,
  confirming rate limiting is a common API pattern. It requires the `429` field
  to be present and non-empty (evaluated at
  `$.paths.*[get,post,put,patch,delete].responses`). Severity: error."
experience:
  - error-handling
  - reliability
spec:
  - paths
  - operations
  - responses
source:
  - api-evangelist
builtin: false
---
