---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-contact-require-url
title: Info Contact Require URL
severity: info
given: $.info.contact
message: Info MUST Have Contact URL
description: Having a contact url associated with the technical contract ensures
  that anyone who comes across the API knows where to go to contact someone.
experience:
  - discoverability
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-url/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-contact-require-url' (Info Contact Require URL).
  Requirement: Having a contact url associated with the technical contract
  ensures that anyone who comes across the API knows where to go to contact
  someone. To fix: Ensure `url` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath `$.info.contact` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-contact-require-url:
    title: Info Contact Require URL
    reference: https://spotlight-rules.com/spec/rules/openapi/info-contact-require-url/
    description: Having a contact url associated with the technical contract ensures
      that anyone who comes across the API knows where to go to contact someone.
    message: Info MUST Have Contact URL
    severity: info
    given: $.info.contact
    then:
      field: url
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-contact-require-url' (Info Contact Require URL).
      Requirement: Having a contact url associated with the technical contract
      ensures that anyone who comes across the API knows where to go to contact
      someone. To fix: Ensure `url` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.info.contact` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
