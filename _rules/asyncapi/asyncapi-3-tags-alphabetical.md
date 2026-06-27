---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tags-alphabetical
title: Asyncapi 3 Tags Alphabetical
severity: info
given: $.info
message: AsyncAPI object must have alphabetical "tags".
description: AsyncAPI object must have alphabetical "tags".
experience:
  - consistency
  - discoverability
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tags-alphabetical/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-tags-alphabetical' (Asyncapi 3 Tags Alphabetical).
  Requirement: AsyncAPI object must have alphabetical \"tags\". To fix: Sort the
  entries by `name` into ascending alphabetical order. This rule is evaluated at
  the JSONPath `$.info` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-3-tags-alphabetical:
    title: Asyncapi 3 Tags Alphabetical
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tags-alphabetical/
    description: AsyncAPI object must have alphabetical "tags".
    message: AsyncAPI object must have alphabetical "tags".
    severity: info
    given: $.info
    then:
      field: tags
      function: alphabetical
      functionOptions:
        keyedBy: name
    tags:
      - format:asyncapi
      - spec:info
      - experience:consistency
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-tags-alphabetical' (Asyncapi 3 Tags
      Alphabetical). Requirement: AsyncAPI object must have alphabetical \"tags\".
      To fix: Sort the entries by `name` into ascending alphabetical order. This
      rule is evaluated at the JSONPath `$.info` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid AsyncAPI. Return only
      the complete corrected document, with no commentary."
---
