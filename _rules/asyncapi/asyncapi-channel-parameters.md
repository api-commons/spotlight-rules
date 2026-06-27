---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-parameters
title: Asyncapi Channel Parameters
severity: info
given: $.channels.* | $.components.channels.*
message: "{{error}}"
description: Channel parameters must be defined and there must be no redundant parameters.
experience:
  - reliability
  - consistency
spec:
  - channels
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-parameters/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-channel-parameters' (Asyncapi Channel Parameters).
  Requirement: Channel parameters must be defined and there must be no redundant
  parameters. This rule is evaluated at the JSONPath `$.channels.* |
  $.components.channels.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-channel-parameters:
    title: Asyncapi Channel Parameters
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-parameters/
    description: Channel parameters must be defined and there must be no redundant parameters.
    message: "{{error}}"
    severity: info
    given:
      - $.channels.*
      - $.components.channels.*
    then:
      function: asyncApiChannelParameters
    tags:
      - format:asyncapi
      - spec:channels
      - spec:components
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-channel-parameters' (Asyncapi Channel Parameters).
      Requirement: Channel parameters must be defined and there must be no
      redundant parameters. This rule is evaluated at the JSONPath `$.channels.* |
      $.components.channels.*` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid AsyncAPI. Return only the complete
      corrected document, with no commentary."
---
