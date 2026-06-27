---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-contact-require-name
title: Info Contact Require Name
severity: info
given: $.info.contact
message: Info MUST Have Contact Name
description: Having a contact name associated with the technical contract
  ensures that anyone who comes across the API knows who to contact.
experience:
  - discoverability
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-name/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-contact-require-name' (Info Contact Require Name).
  Requirement: Having a contact name associated with the technical contract
  ensures that anyone who comes across the API knows who to contact. To fix:
  Ensure `name` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.info.contact` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-contact-require-name:
    title: Info Contact Require Name
    reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-name/
    description: Having a contact name associated with the technical contract
      ensures that anyone who comes across the API knows who to contact.
    message: Info MUST Have Contact Name
    severity: info
    given: $.info.contact
    then:
      field: name
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-contact-require-name' (Info Contact Require Name).
      Requirement: Having a contact name associated with the technical contract
      ensures that anyone who comes across the API knows who to contact. To fix:
      Ensure `name` is present and non-empty at each matching location. This rule
      is evaluated at the JSONPath `$.info.contact` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
