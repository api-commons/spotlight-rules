---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-integer-require-maximum
title: Parameter Integer Require Maximum
severity: info
given: $.apis.*.properties.* | $.common.*
message: Parameter Schema Type Integer Maximum
description: Parameters that are of the integer schema type must have their
  maximum value set, defining the shape of parameter data passed in with a
  request.
experience:
  - data-modeling
  - reliability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-integer-require-maximum/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-integer-require-maximum' (Parameter Integer Require
  Maximum). Requirement: Parameters that are of the integer schema type must
  have their maximum value set, defining the shape of parameter data passed in
  with a request. To fix: Ensure `maximum` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
