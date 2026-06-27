---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-no-eval-tag
title: Info Description No Eval Tag
severity: info
given: $.info
message: Info Description MUST NOT Have Eval Tag
description: Eval functions MUST not be included in the description of an API,
  keeping descriptions to just the text that is needed, and relying on the rest
  of the OpenAPI to describe what is possible.
experience:
  - security
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-description-no-eval-tag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-description-no-eval-tag' (Info Description No Eval Tag).
  Requirement: Eval functions MUST not be included in the description of an API,
  keeping descriptions to just the text that is needed, and relying on the rest
  of the OpenAPI to describe what is possible. To fix: Ensure `description` does
  NOT match the regular expression `^\\b(<eval)\\b`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.info` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-description-no-eval-tag:
    title: Info Description No Eval Tag
    reference: https://spotlight-rules.com/spec/rules/openapi/info-description-no-eval-tag/
    description: Eval functions MUST not be included in the description of an API,
      keeping descriptions to just the text that is needed, and relying on the
      rest of the OpenAPI to describe what is possible.
    message: Info Description MUST NOT Have Eval Tag
    severity: info
    given: $.info
    then:
      field: description
      function: pattern
      functionOptions:
        notMatch: ^\b(<eval)\b
    tags:
      - format:openapi
      - spec:info
      - experience:security
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-description-no-eval-tag' (Info Description No Eval
      Tag). Requirement: Eval functions MUST not be included in the description of
      an API, keeping descriptions to just the text that is needed, and relying on
      the rest of the OpenAPI to describe what is possible. To fix: Ensure
      `description` does NOT match the regular expression `^\\b(<eval)\\b`; rename
      or rewrite any value that does. This rule is evaluated at the JSONPath
      `$.info` — inspect every location it matches and correct only what violates
      the rule. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
