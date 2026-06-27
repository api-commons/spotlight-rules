---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-contact-2
title: Info Require Contact 2
severity: info
given: $.info
message: Info MUST Have Contact Object
description: Having a contact object associated with the technical contract
  ensures that anyone who comes across the API has someone to contact and get
  more information.
experience:
  - discoverability
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-contact-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-contact-2' (Info Require Contact 2).
  Requirement: Having a contact object associated with the technical contract
  ensures that anyone who comes across the API has someone to contact and get
  more information. To fix: Ensure `contact` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.info` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-require-contact-2:
    title: Info Require Contact 2
    reference: https://spotlight-rules.com/spec/rules/openapi/info-require-contact-2/
    description: Having a contact object associated with the technical contract
      ensures that anyone who comes across the API has someone to contact and get
      more information.
    message: Info MUST Have Contact Object
    severity: info
    given: $.info
    then:
      field: contact
      function: truthy
    tags:
      - format:openapi
      - spec:info
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-require-contact-2' (Info Require Contact 2).
      Requirement: Having a contact object associated with the technical contract
      ensures that anyone who comes across the API has someone to contact and get
      more information. To fix: Ensure `contact` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath `$.info` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
