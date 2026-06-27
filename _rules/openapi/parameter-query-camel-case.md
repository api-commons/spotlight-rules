---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-query-camel-case
title: Parameter Query Camel Case
severity: info
given: $.paths.*.*.parameters[?(@ && @.in=='query')].name
message: Query parameter name has to be ASCII camelCase
description: MUST query parameter names must be ASCII camelCase [130a].
experience:
  - naming
  - consistency
spec:
  - paths
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-query-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-query-camel-case' (Parameter Query Camel Case).
  Requirement: MUST query parameter names must be ASCII camelCase [130a]. To
  fix: Ensure the targeted value matches the regular expression
  `^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$`; rewrite any value that does
  not. This rule is evaluated at the JSONPath `$.paths.*.*.parameters[?(@ &&
  @.in=='query')].name` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-query-camel-case:
    title: Parameter Query Camel Case
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-query-camel-case/
    description: MUST query parameter names must be ASCII camelCase [130a].
    message: Query parameter name has to be ASCII camelCase
    severity: info
    given: $.paths.*.*.parameters[?(@ && @.in=='query')].name
    then:
      function: pattern
      functionOptions:
        match: ^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$
    tags:
      - format:openapi
      - spec:paths
      - spec:parameters
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-query-camel-case' (Parameter Query Camel Case).
      Requirement: MUST query parameter names must be ASCII camelCase [130a]. To
      fix: Ensure the targeted value matches the regular expression
      `^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$`; rewrite any value that does
      not. This rule is evaluated at the JSONPath `$.paths.*.*.parameters[?(@ &&
      @.in=='query')].name` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
