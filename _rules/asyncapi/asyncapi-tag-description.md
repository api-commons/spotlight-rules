---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tag-description
title: Asyncapi Tag Description
severity: info
given: $.tags[*]
message: Tag object must have "description".
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-tag-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-tag-description' (Asyncapi Tag Description).
  Requirement: Tag object must have \"description\". To fix: Ensure
  `description` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.tags[*]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-tag-description:
    title: Asyncapi Tag Description
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-tag-description/
    description: Tag object must have "description".
    message: Tag object must have "description".
    severity: info
    given: $.tags[*]
    then:
      field: description
      function: truthy
    tags:
      - format:asyncapi
      - spec:tags
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-tag-description' (Asyncapi Tag Description).
      Requirement: Tag object must have \"description\". To fix: Ensure
      `description` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.tags[*]` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid AsyncAPI. Return only the
      complete corrected document, with no commentary."
---
