---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-on-approved-domain
title: Server On Approved Domain
severity: info
given: $.servers..url
message: APIs SHOULD be accessible under api.spscommerce.com.
description: APIs SHOULD be accessible under api.spscommerce.com.
experience:
  - governance
  - consistency
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-on-approved-domain/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-on-approved-domain' (Server On Approved Domain).
  Requirement: APIs SHOULD be accessible under api.spscommerce.com. To fix:
  Ensure the targeted value matches the regular expression
  `api.spscommerce.com|api.sps-internal.com|localhost`; rewrite any value that
  does not. This rule is evaluated at the JSONPath `$.servers..url` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  server-on-approved-domain:
    title: Server On Approved Domain
    reference: https://spotlight-rules.com/spec/rules/openapi/server-on-approved-domain/
    description: APIs SHOULD be accessible under api.spscommerce.com.
    message: APIs SHOULD be accessible under api.spscommerce.com.
    severity: info
    given: $.servers..url
    then:
      function: pattern
      functionOptions:
        match: api.spscommerce.com|api.sps-internal.com|localhost
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:servers
      - experience:governance
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'server-on-approved-domain' (Server On Approved Domain).
      Requirement: APIs SHOULD be accessible under api.spscommerce.com. To fix:
      Ensure the targeted value matches the regular expression
      `api.spscommerce.com|api.sps-internal.com|localhost`; rewrite any value that
      does not. This rule is evaluated at the JSONPath `$.servers..url` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
