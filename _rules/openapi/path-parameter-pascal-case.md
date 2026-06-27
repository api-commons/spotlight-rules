---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-parameter-pascal-case
title: Path Parameter Pascal Case
severity: info
given: $..parameters[?(@.in == 'path')].name
message: "{{property}} path parameter is not PascalCase: {{error}}"
description: Path parameters MUST follow PascalCase.
experience:
  - naming
  - consistency
spec:
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-parameter-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-parameter-pascal-case' (Path Parameter Pascal Case).
  Requirement: Path parameters MUST follow PascalCase. To fix: Ensure the
  targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]+$`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$..parameters[?(@.in == 'path')].name` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-parameter-pascal-case:
    title: Path Parameter Pascal Case
    reference: https://spotlight-rules.com/spec/rules/openapi/path-parameter-pascal-case/
    description: Path parameters MUST follow PascalCase.
    message: "{{property}} path parameter is not PascalCase: {{error}}"
    severity: info
    given: $..parameters[?(@.in == 'path')].name
    then:
      function: pattern
      functionOptions:
        match: ^[A-Z][a-zA-Z0-9]+$
    tags:
      - format:openapi
      - spec:parameters
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-parameter-pascal-case' (Path Parameter Pascal Case).
      Requirement: Path parameters MUST follow PascalCase. To fix: Ensure the
      targeted value matches the regular expression `^[A-Z][a-zA-Z0-9]+$`; rewrite
      any value that does not. This rule is evaluated at the JSONPath
      `$..parameters[?(@.in == 'path')].name` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
