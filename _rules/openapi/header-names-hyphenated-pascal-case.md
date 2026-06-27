---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: header-names-hyphenated-pascal-case
title: Header Names Hyphenated Pascal Case
severity: info
given: $..parameters[?(@.in == 'header')].name
message: "'HTTP' headers MUST follow 'Hyphenated-Pascal-Case' notation"
description: All `HTTP` headers MUST use `Hyphenated-Pascal-Case` notation.
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/header-names-hyphenated-pascal-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'header-names-hyphenated-pascal-case' (Header Names Hyphenated
  Pascal Case). Requirement: All `HTTP` headers MUST use
  `Hyphenated-Pascal-Case` notation. To fix: Ensure the targeted value matches
  the regular expression `/^([A-Z][a-z0-9]-)*([A-Z][a-z0-9])+/`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$..parameters[?(@.in == 'header')].name` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  header-names-hyphenated-pascal-case:
    title: Header Names Hyphenated Pascal Case
    reference: https://spotlight-rules.com/spec/rules/openapi/header-names-hyphenated-pascal-case/
    description: All `HTTP` headers MUST use `Hyphenated-Pascal-Case` notation.
    message: "'HTTP' headers MUST follow 'Hyphenated-Pascal-Case' notation"
    severity: info
    given: $..parameters[?(@.in == 'header')].name
    then:
      function: pattern
      functionOptions:
        match: /^([A-Z][a-z0-9]-)*([A-Z][a-z0-9])+/
    tags:
      - format:openapi
      - spec:parameters
      - spec:headers
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'header-names-hyphenated-pascal-case' (Header Names
      Hyphenated Pascal Case). Requirement: All `HTTP` headers MUST use
      `Hyphenated-Pascal-Case` notation. To fix: Ensure the targeted value matches
      the regular expression `/^([A-Z][a-z0-9]-)*([A-Z][a-z0-9])+/`; rewrite any
      value that does not. This rule is evaluated at the JSONPath
      `$..parameters[?(@.in == 'header')].name` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
