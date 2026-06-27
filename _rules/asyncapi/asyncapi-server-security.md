---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-server-security
title: Asyncapi Server Security
severity: info
given: $.servers.*.security.*
message: "{{error}}"
description: Server have to reference a defined security schemes.
experience:
  - security
  - reliability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-security/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-server-security' (Asyncapi Server Security).
  Requirement: Server have to reference a defined security schemes. This rule is
  evaluated at the JSONPath `$.servers.*.security.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-server-security:
    title: Asyncapi Server Security
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-server-security/
    description: Server have to reference a defined security schemes.
    message: "{{error}}"
    severity: info
    given: $.servers.*.security.*
    then:
      function: asyncApiSecurity
      functionOptions:
        objectType: Server
    tags:
      - format:asyncapi
      - spec:servers
      - experience:security
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-server-security' (Asyncapi Server Security).
      Requirement: Server have to reference a defined security schemes. This rule
      is evaluated at the JSONPath `$.servers.*.security.*` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
