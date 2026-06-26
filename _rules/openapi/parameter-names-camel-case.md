---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-names-camel-case
title: Parameter Names Camel Case
severity: info
given: $.components.parameters.*
message: Parameters Names MUST Be Camel Case
description: Providing parameters with consistent naming helps make it easier
  for API consumers to understand how they are able to configure their API
  requests.
experience:
  - naming
  - consistency
spec:
  - parameters
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-names-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-names-camel-case' (Parameter Names Camel Case).
  Requirement: Providing parameters with consistent naming helps make it easier
  for API consumers to understand how they are able to configure their API
  requests. To fix: Ensure `name` does NOT match the regular expression
  `^[a-z]+(?:[A-Z][a-z]+)*$`; rename or rewrite any value that does. Also:
  Ensure `name` matches the regular expression `^[A-Z](([a-z0-9]+[A-Z]?)*)$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.components.parameters.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
