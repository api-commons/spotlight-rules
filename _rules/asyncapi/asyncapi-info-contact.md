---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-info-contact
title: Asyncapi Info Contact
severity: info
given: $
message: Info object must have "contact" object.
description: Info object must have "contact" object.
experience:
  - documentation
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-contact/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-info-contact' (Asyncapi Info Contact). Requirement:
  Info object must have \"contact\" object. To fix: Ensure `info.contact` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  asyncapi-info-contact:
    title: Asyncapi Info Contact
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-contact/
    description: Info object must have "contact" object.
    message: Info object must have "contact" object.
    severity: info
    given: $
    then:
      field: info.contact
      function: truthy
    tags:
      - format:asyncapi
      - spec:document
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-info-contact' (Asyncapi Info Contact).
      Requirement: Info object must have \"contact\" object. To fix: Ensure
      `info.contact` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      AsyncAPI. Return only the complete corrected document, with no commentary."
---
