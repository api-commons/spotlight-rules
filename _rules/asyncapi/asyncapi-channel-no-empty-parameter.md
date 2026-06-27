---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-no-empty-parameter
title: Asyncapi Channel No Empty Parameter
severity: info
given: $.channels
message: Channel path must not have empty parameter substitution pattern.
description: Channel path must not have empty parameter substitution pattern.
experience:
  - reliability
  - consistency
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-no-empty-parameter/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-channel-no-empty-parameter' (Asyncapi Channel No
  Empty Parameter). Requirement: Channel path must not have empty parameter
  substitution pattern. To fix: Ensure `@key` does NOT match the regular
  expression `{}`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.channels` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-channel-no-empty-parameter:
    title: Asyncapi Channel No Empty Parameter
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-no-empty-parameter/
    description: Channel path must not have empty parameter substitution pattern.
    message: Channel path must not have empty parameter substitution pattern.
    severity: info
    given: $.channels
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: "{}"
    tags:
      - format:asyncapi
      - spec:channels
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-channel-no-empty-parameter' (Asyncapi Channel No
      Empty Parameter). Requirement: Channel path must not have empty parameter
      substitution pattern. To fix: Ensure `@key` does NOT match the regular
      expression `{}`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$.channels` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid AsyncAPI. Return only the
      complete corrected document, with no commentary."
---
