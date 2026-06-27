---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-contact-require-email
title: Info Contact Require Email
severity: info
given: $.info.contact
message: Info MUST Have Contact Email
description: Having a contact email address associated with the technical
  contract ensures that anyone who comes across the API has someone to email and
  get more information.
experience:
  - discoverability
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-email/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-contact-require-email' (Info Contact Require Email).
  Requirement: Having a contact email address associated with the technical
  contract ensures that anyone who comes across the API has someone to email and
  get more information. To fix: Ensure `email` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.info.contact` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-contact-require-email:
    title: Info Contact Require Email
    reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-email/
    description: Having a contact email address associated with the technical
      contract ensures that anyone who comes across the API has someone to email
      and get more information.
    message: Info MUST Have Contact Email
    severity: info
    given: $.info.contact
    then:
      field: email
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-contact-require-email' (Info Contact Require Email).
      Requirement: Having a contact email address associated with the technical
      contract ensures that anyone who comes across the API has someone to email
      and get more information. To fix: Ensure `email` is present and non-empty at
      each matching location. This rule is evaluated at the JSONPath
      `$.info.contact` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
