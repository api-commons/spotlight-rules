---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-variables
title: Asyncapi Server Variables
severity: info
given: $.servers.* | $.components.servers.*
message: "{{error}}"
description: Server variables must be defined and there must be no redundant variables.
experience:
  - reliability
  - consistency
spec:
  - servers
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-variables/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-server-variables' (Asyncapi Server Variables).
  Requirement: Server variables must be defined and there must be no redundant
  variables. This rule is evaluated at the JSONPath `$.servers.* |
  $.components.servers.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid AsyncAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-server-variables:
    title: Asyncapi Server Variables
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-variables/
    description: Server variables must be defined and there must be no redundant variables.
    message: "{{error}}"
    severity: info
    given:
      - $.servers.*
      - $.components.servers.*
    then:
      function: serverVariables
    tags:
      - format:asyncapi
      - spec:servers
      - spec:components
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-server-variables' (Asyncapi Server Variables).
      Requirement: Server variables must be defined and there must be no redundant
      variables. This rule is evaluated at the JSONPath `$.servers.* |
      $.components.servers.*` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
