---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-servers
title: Asyncapi Servers
severity: info
given: $
message: AsyncAPI object must have non-empty "servers" object.
description: AsyncAPI object must have non-empty "servers" object.
experience:
  - usability
  - reliability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-servers/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-servers' (Asyncapi Servers). Requirement: AsyncAPI
  object must have non-empty \"servers\" object. To fix: Adjust `servers` so it
  conforms to the schema this rule requires. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-servers:
    title: Asyncapi Servers
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-servers/
    description: AsyncAPI object must have non-empty "servers" object.
    message: AsyncAPI object must have non-empty "servers" object.
    severity: info
    given: $
    then:
      field: servers
      function: schema
      functionOptions:
        schema:
          type: object
          minProperties: 1
        allErrors: true
    tags:
      - format:asyncapi
      - spec:document
      - experience:usability
      - experience:reliability
      - experience:documentation
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-servers' (Asyncapi Servers). Requirement: AsyncAPI
      object must have non-empty \"servers\" object. To fix: Adjust `servers` so
      it conforms to the schema this rule requires. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid AsyncAPI. Return only the
      complete corrected document, with no commentary."
---
