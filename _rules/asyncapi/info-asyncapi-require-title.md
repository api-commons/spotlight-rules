---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: info-asyncapi-require-title
title: Info Asyncapi Require Title
severity: info
given: $.info
message: AsyncAPI info should have a title.
description: The API should declare an info.title.
experience:
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/info-asyncapi-require-title/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'info-asyncapi-require-title' (Info Asyncapi Require Title).
  Requirement: The API should declare an info.title. To fix: Ensure `title` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  info-asyncapi-require-title:
    title: Info Asyncapi Require Title
    reference: https://spotlight-rules.com/spec/rules/asyncapi/info-asyncapi-require-title/
    description: The API should declare an info.title.
    message: AsyncAPI info should have a title.
    given: $.info
    severity: info
    then:
      field: title
      function: truthy
    tags:
      - format:asyncapi
      - spec:info
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'info-asyncapi-require-title' (Info Asyncapi Require Title).
      Requirement: The API should declare an info.title. To fix: Ensure `title` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.info` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
