---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-response-use-problem-type
title: Error Response Use Problem Type
severity: error
given: $.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~
message: Error responses should support RFC7807 in {{path}}.
description: 'Error management is a key enabler of a resilient API ecosystem.
  Enforcing a consistent schema for errors between different APIs, enables
  client to properly implement an error management strategy, with positive
  impacts for users. Error responses should return one of the media-type defined
  in RFC7807: - `application/problem+json` - `application/problem+xml` An
  example of a valid response: ``` responses: "503": content:
  application/problem+json: schema: ... ```. It requires the targeted value to
  be one of ["application/problem+xml","application/problem+json"] (evaluated at
  `$.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~`).
  Severity: error.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - media-types
source:
  - team-digitale
builtin: false
---
