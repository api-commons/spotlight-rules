---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-schema-default
title: Asyncapi Schema Default
severity: info
given: $.components.schemas.*.default^ |
  $.components.parameters.*.schema.default^ |
  $.channels.*.parameters.*.schema.default^
message: "{{error}}"
description: Default must be valid against its defined schema.
experience:
  - data-modeling
  - reliability
spec:
  - channels
  - components
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-schema-default/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-schema-default' (Asyncapi Schema Default).
  Requirement: Default must be valid against its defined schema. This rule is
  evaluated at the JSONPath `$.components.schemas.*.default^ |
  $.components.parameters.*.schema.default^ |
  $.channels.*.parameters.*.schema.default^` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-schema-default:
    title: Asyncapi Schema Default
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-schema-default/
    description: Default must be valid against its defined schema.
    message: "{{error}}"
    severity: info
    given:
      - $.components.schemas.*.default^
      - $.components.parameters.*.schema.default^
      - $.channels.*.parameters.*.schema.default^
    then:
      function: asyncApiSchemaValidation
      functionOptions:
        type: default
    tags:
      - format:asyncapi
      - spec:channels
      - spec:components
      - spec:schemas
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-schema-default' (Asyncapi Schema Default).
      Requirement: Default must be valid against its defined schema. This rule is
      evaluated at the JSONPath `$.components.schemas.*.default^ |
      $.components.parameters.*.schema.default^ |
      $.channels.*.parameters.*.schema.default^` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid AsyncAPI. Return only
      the complete corrected document, with no commentary."
---
