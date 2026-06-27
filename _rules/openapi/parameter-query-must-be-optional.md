---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-query-must-be-optional
title: Parameter Query Must Be Optional
severity: info
given: $.paths.*.*.parameters[?(@.in=='query')].required
message: Query parameters MUST be optional.
description: Query parameters MUST be optional.
experience:
  - usability
  - consistency
spec:
  - paths
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-query-must-be-optional/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-query-must-be-optional' (Parameter Query Must Be
  Optional). Requirement: Query parameters MUST be optional. To fix: Ensure the
  targeted value is absent or empty (falsy) at each matching location. This rule
  is evaluated at the JSONPath
  `$.paths.*.*.parameters[?(@.in=='query')].required` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-query-must-be-optional:
    title: Parameter Query Must Be Optional
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-query-must-be-optional/
    description: Query parameters MUST be optional.
    message: Query parameters MUST be optional.
    severity: info
    given: $.paths.*.*.parameters[?(@.in=='query')].required
    then:
      function: falsy
    tags:
      - format:openapi
      - spec:paths
      - spec:parameters
      - experience:usability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-query-must-be-optional' (Parameter Query Must Be
      Optional). Requirement: Query parameters MUST be optional. To fix: Ensure
      the targeted value is absent or empty (falsy) at each matching location.
      This rule is evaluated at the JSONPath
      `$.paths.*.*.parameters[?(@.in=='query')].required` — inspect every location
      it matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
