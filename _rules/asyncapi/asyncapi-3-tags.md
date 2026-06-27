---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tags
title: Asyncapi 3 Tags
severity: info
given: $.info
message: AsyncAPI document must have non-empty "tags" array.
description: AsyncAPI document must have non-empty "tags" array.
experience:
  - discoverability
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tags/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-tags' (Asyncapi 3 Tags). Requirement: AsyncAPI
  document must have non-empty \"tags\" array. To fix: Ensure `tags` is present
  and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  asyncapi-3-tags:
    title: Asyncapi 3 Tags
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tags/
    description: AsyncAPI document must have non-empty "tags" array.
    message: AsyncAPI document must have non-empty "tags" array.
    severity: info
    given:
      - $.info
    then:
      field: tags
      function: truthy
    tags:
      - format:asyncapi
      - spec:info
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-tags' (Asyncapi 3 Tags). Requirement: AsyncAPI
      document must have non-empty \"tags\" array. To fix: Ensure `tags` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.info` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
