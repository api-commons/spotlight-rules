---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-must-use-json-content-type
title: Response Must Use JSON Content Type
severity: error
given: $.paths.*[get,post,put,patch,delete].responses[*].content
message: Response MUST Use application/json Content Type
description: "API responses should use application/json as the primary content
  type. Analysis of 773 specs shows application/json is used by 92% of APIs,
  making it the universal standard for modern REST APIs. It requires the
  `application/json` field to be present and non-empty (evaluated at
  `$.paths.*[get,post,put,patch,delete].responses[*].content`). Severity:
  error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - responses
  - media-types
source:
  - api-evangelist
builtin: false
---
