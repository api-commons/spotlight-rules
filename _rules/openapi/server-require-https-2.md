---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-require-https-2
title: Server Require HTTPS 2
severity: info
given: $.servers[?(@["x-sandbox"] != true)] | $.paths..servers[?(@["x-sandbox"]
  != true)]
message: "Non-sandbox url  {{value}} {{error}}. Add `x-sandbox: true` to skip
  this check on a specific server."
description: "Servers must use https to ensure the origin of the responses and
  protect the integrity and the confidentiality of the communication. You can
  use `http://` only on sandboxes environment. Use `x-sandbox: true` to skip
  this kind of check."
experience:
  - security
spec:
  - servers
  - paths
topic: []
owasp:
  - api8
reference: https://spotlight-rules.com/spec/rules/openapi/server-require-https-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-require-https-2' (Server Require HTTPS 2).
  Requirement: Servers must use https to ensure the origin of the responses and
  protect the integrity and the confidentiality of the communication. You can
  use `http://` only on sandboxes environment. Use `x-sandbox: true` to skip
  this kind of check. To fix: Ensure `url` matches the regular expression
  `^https://.*`; rewrite any value that does not. Guidance: Non-sandbox url .
  Add `x-sandbox: true` to skip this check on a specific server. This rule is
  evaluated at the JSONPath `$.servers[?(@[\"x-sandbox\"] != true)] |
  $.paths..servers[?(@[\"x-sandbox\"] != true)]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  server-require-https-2:
    title: Server Require HTTPS 2
    reference: https://spotlight-rules.com/spec/rules/openapi/server-require-https-2/
    description: "Servers must use https to ensure the origin of the responses and
      protect the integrity and the confidentiality of the communication. You can
      use `http://` only on sandboxes environment. Use `x-sandbox: true` to skip
      this kind of check."
    message: "Non-sandbox url  {{value}} {{error}}. Add `x-sandbox: true` to skip
      this check on a specific server."
    severity: info
    given:
      - $.servers[?(@["x-sandbox"] != true)]
      - $.paths..servers[?(@["x-sandbox"] != true)]
    then:
      field: url
      function: pattern
      functionOptions:
        match: ^https://.*
    tags:
      - owasp:api8
      - format:openapi
      - spec:servers
      - spec:paths
      - experience:security
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'server-require-https-2' (Server Require HTTPS 2).
      Requirement: Servers must use https to ensure the origin of the responses
      and protect the integrity and the confidentiality of the communication. You
      can use `http://` only on sandboxes environment. Use `x-sandbox: true` to
      skip this kind of check. To fix: Ensure `url` matches the regular expression
      `^https://.*`; rewrite any value that does not. Guidance: Non-sandbox url .
      Add `x-sandbox: true` to skip this check on a specific server. This rule is
      evaluated at the JSONPath `$.servers[?(@[\"x-sandbox\"] != true)] |
      $.paths..servers[?(@[\"x-sandbox\"] != true)]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
