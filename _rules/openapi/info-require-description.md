---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-description
title: Info Require Description
severity: info
given: $.info
message: Info section is missing a description.
description: Info section is missing a description.
experience:
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-description' (Info Require Description).
  Requirement: Info section is missing a description. To fix: Ensure
  `description` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.info` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-require-description:
    title: Info Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/info-require-description/
    description: Info section is missing a description.
    message: Info section is missing a description.
    severity: info
    given: $.info
    then:
      field: description
      function: truthy
    formats:
      - oas3
      - oas3_1
    tags:
      - format:openapi
      - spec:info
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-require-description' (Info Require Description).
      Requirement: Info section is missing a description. To fix: Ensure
      `description` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.info` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
