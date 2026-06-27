---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-oauth-flow-require-scopes
title: Security OAuth Flow Require Scopes
severity: info
given: $.components.securitySchemes[?(@ && @.type == 'oauth2')].flows[*]
message: OAuth2 flow should define at least one scope.
description: OAuth2 flows should define scopes so authorization is granular and
  least-privilege rather than all-or-nothing.
experience:
  - security
  - governance
spec:
  - components
topic: []
owasp:
  - api5
reference: https://spotlight-rules.com/spec/rules/openapi/security-oauth-flow-require-scopes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-oauth-flow-require-scopes' (Security OAuth Flow
  Require Scopes). Requirement: OAuth2 flows should define scopes so
  authorization is granular and least-privilege rather than all-or-nothing. To
  fix: Adjust `scopes` so it conforms to the schema this rule requires. This
  rule is evaluated at the JSONPath `$.components.securitySchemes[?(@ && @.type
  == 'oauth2')].flows[*]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  security-oauth-flow-require-scopes:
    title: Security OAuth Flow Require Scopes
    reference: https://spotlight-rules.com/spec/rules/openapi/security-oauth-flow-require-scopes/
    description: OAuth2 flows should define scopes so authorization is granular and
      least-privilege rather than all-or-nothing.
    message: OAuth2 flow should define at least one scope.
    given: $.components.securitySchemes[?(@ && @.type == 'oauth2')].flows[*]
    severity: info
    then:
      field: scopes
      function: schema
      functionOptions:
        schema:
          type: object
          minProperties: 1
    tags:
      - format:openapi
      - spec:components
      - experience:security
      - experience:governance
      - owasp:api5
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'security-oauth-flow-require-scopes' (Security OAuth Flow
      Require Scopes). Requirement: OAuth2 flows should define scopes so
      authorization is granular and least-privilege rather than all-or-nothing. To
      fix: Adjust `scopes` so it conforms to the schema this rule requires. This
      rule is evaluated at the JSONPath `$.components.securitySchemes[?(@ &&
      @.type == 'oauth2')].flows[*]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
