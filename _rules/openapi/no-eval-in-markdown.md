---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-eval-in-markdown
title: No Eval In Markdown
severity: info
given: $..[description,title]
message: Markdown descriptions must not have "eval(".
description: Markdown descriptions must not have "eval(".
experience:
  - security
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/no-eval-in-markdown/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'no-eval-in-markdown' (No Eval In Markdown). Requirement:
  Markdown descriptions must not have \"eval(\". To fix: Ensure the targeted
  value does NOT match the regular expression `eval\\(`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath
  `$..[description,title]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  no-eval-in-markdown:
    title: No Eval In Markdown
    reference: https://spotlight-rules.com/spec/rules/openapi/no-eval-in-markdown/
    description: Markdown descriptions must not have "eval(".
    message: Markdown descriptions must not have "eval(".
    severity: info
    given: $..[description,title]
    then:
      function: pattern
      functionOptions:
        notMatch: eval\(
    tags:
      - format:openapi
      - spec:document
      - experience:security
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'no-eval-in-markdown' (No Eval In Markdown). Requirement:
      Markdown descriptions must not have \"eval(\". To fix: Ensure the targeted
      value does NOT match the regular expression `eval\\(`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath
      `$..[description,title]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
