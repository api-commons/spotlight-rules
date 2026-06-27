---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-channel-servers
title: Asyncapi Channel Servers
severity: info
given: $
message: "{{error}}"
description: Channel servers must be defined in the "servers" object.
experience:
  - reliability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-servers/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-channel-servers' (Asyncapi Channel Servers).
  Requirement: Channel servers must be defined in the \"servers\" object. Make
  the smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-channel-servers:
    title: Asyncapi Channel Servers
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-channel-servers/
    description: Channel servers must be defined in the "servers" object.
    message: "{{error}}"
    severity: info
    given: $
    then:
      function: asyncApi2ChannelServers
    tags:
      - format:asyncapi
      - spec:document
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-channel-servers' (Asyncapi Channel Servers).
      Requirement: Channel servers must be defined in the \"servers\" object. Make
      the smallest change that satisfies the rule, leave all unrelated content,
      key order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
