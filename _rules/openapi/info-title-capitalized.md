---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-title-capitalized
title: Info Title Capitalized
severity: info
given: $.info.title
message: Info Title Has First Characters Capitalized
description: Having a consistent casing for the title for your API helps provide
  constraints for teams naming the API, but also keep consistent with other APIs
  from across teams.
experience:
  - naming
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-title-capitalized/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-title-capitalized' (Info Title Capitalized).
  Requirement: Having a consistent casing for the title for your API helps
  provide constraints for teams naming the API, but also keep consistent with
  other APIs from across teams. To fix: Ensure the targeted value matches the
  regular expression `[A-Z]\\w*`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.info.title` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-title-capitalized:
    title: Info Title Capitalized
    reference: https://spotlight-rules.com/spec/rules/openapi/info-title-capitalized/
    description: Having a consistent casing for the title for your API helps provide
      constraints for teams naming the API, but also keep consistent with other
      APIs from across teams.
    message: Info Title Has First Characters Capitalized
    severity: info
    given: $.info.title
    then:
      function: pattern
      functionOptions:
        match: "[A-Z]\\w*"
    tags:
      - format:openapi
      - spec:info
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-title-capitalized' (Info Title Capitalized).
      Requirement: Having a consistent casing for the title for your API helps
      provide constraints for teams naming the API, but also keep consistent with
      other APIs from across teams. To fix: Ensure the targeted value matches the
      regular expression `[A-Z]\\w*`; rewrite any value that does not. This rule
      is evaluated at the JSONPath `$.info.title` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
