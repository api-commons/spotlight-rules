---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-name-max-length
title: Parameter Name Max Length
severity: info
given: $.components.parameters[?(@.in=='path')].name
message: Parameters Name Length MUST Be Less Than 25 Characters
description: Providing short and concise names for your parameters helps make it
  easier for API consumers to understand how they are able to configure their
  API requests.
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-name-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-name-max-length' (Parameter Name Max Length).
  Requirement: Providing short and concise names for your parameters helps make
  it easier for API consumers to understand how they are able to configure their
  API requests. To fix: Ensure the length of `summary` is at most 25. This rule
  is evaluated at the JSONPath `$.components.parameters[?(@.in=='path')].name` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
