---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-url-meet-standards
title: Server URL Meet Standards
severity: info
given: $.servers
message: "{{error}}"
description: API URLs should meet the Trimble API Standards.
experience:
  - consistency
  - governance
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/server-url-meet-standards/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'server-url-meet-standards' (Server URL Meet Standards).
  Requirement: API URLs should meet the Trimble API Standards. This rule is
  evaluated at the JSONPath `$.servers` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  server-url-meet-standards:
    title: Server URL Meet Standards
    reference: https://spotlight-rules.com/spec/rules/openapi/server-url-meet-standards/
    description: API URLs should meet the Trimble API Standards.
    message: "{{error}}"
    severity: info
    given: $.servers
    then:
      function: trimble:valid-url-checker
    tags:
      - format:openapi
      - spec:servers
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'server-url-meet-standards' (Server URL Meet Standards).
      Requirement: API URLs should meet the Trimble API Standards. This rule is
      evaluated at the JSONPath `$.servers` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
