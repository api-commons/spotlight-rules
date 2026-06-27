---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameter-camel-case
title: Path Parameter Camel Case
severity: info
given: $..parameters[?(@.in == 'path')].name
message: "{{property}} path parameter is not camelCase: {{error}}"
description: Path parameters MUST follow camelCase.
experience:
  - naming
  - consistency
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-parameter-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-parameter-camel-case' (Path Parameter Camel Case).
  Requirement: Path parameters MUST follow camelCase. To fix: Ensure the
  targeted value matches the regular expression `^[a-z][a-zA-Z0-9]+$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$..parameters[?(@.in == 'path')].name` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-parameter-camel-case:
    title: Path Parameter Camel Case
    reference: https://spotlight-rules.com/spec/rules/openapi/path-parameter-camel-case/
    description: Path parameters MUST follow camelCase.
    message: "{{property}} path parameter is not camelCase: {{error}}"
    severity: info
    given: $..parameters[?(@.in == 'path')].name
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-zA-Z0-9]+$
    tags:
      - format:openapi
      - spec:parameters
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-parameter-camel-case' (Path Parameter Camel Case).
      Requirement: Path parameters MUST follow camelCase. To fix: Ensure the
      targeted value matches the regular expression `^[a-z][a-zA-Z0-9]+$`; rewrite
      any value that does not. This rule is evaluated at the JSONPath
      `$..parameters[?(@.in == 'path')].name` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
