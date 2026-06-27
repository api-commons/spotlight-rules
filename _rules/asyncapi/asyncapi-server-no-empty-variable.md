---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-no-empty-variable
title: Asyncapi Server No Empty Variable
severity: info
given: $.servers[*].url
message: Server URL must not have empty variable substitution pattern.
description: Server URL must not have empty variable substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-no-empty-variable/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-server-no-empty-variable' (Asyncapi Server No Empty
  Variable). Requirement: Server URL must not have empty variable substitution
  pattern. To fix: Ensure the targeted value does NOT match the regular
  expression `{}`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.servers[*].url` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-server-no-empty-variable:
    title: Asyncapi Server No Empty Variable
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-no-empty-variable/
    description: Server URL must not have empty variable substitution pattern.
    message: Server URL must not have empty variable substitution pattern.
    severity: info
    given: $.servers[*].url
    then:
      function: pattern
      functionOptions:
        notMatch: "{}"
    tags:
      - format:asyncapi
      - spec:servers
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-server-no-empty-variable' (Asyncapi Server No
      Empty Variable). Requirement: Server URL must not have empty variable
      substitution pattern. To fix: Ensure the targeted value does NOT match the
      regular expression `{}`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$.servers[*].url` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid AsyncAPI. Return only
      the complete corrected document, with no commentary."
---
