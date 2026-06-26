---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: channel-parameter-require-examples
title: Channel Parameter Require Examples
severity: info
given: $.channels.*.parameters.*.schema
message: Parameter must have examples
description: Parameter must have examples.
experience:
  - documentation
  - usability
spec:
  - channels
  - parameters
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/channel-parameter-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'channel-parameter-require-examples' (Channel Parameter
  Require Examples). Requirement: Parameter must have examples. To fix: Ensure
  `examples` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.channels.*.parameters.*.schema` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
