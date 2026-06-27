---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-contact
title: Info Contact
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
reference: https://spotlight-rules.com/spec/rules/openapi/info-contact/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-contact' (Info Contact). Requirement: Info object must
  have \"contact\" object. To fix: Ensure `info.contact` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
ruleyaml: >
  info-contact:
    title: Info Contact
    reference: https://spotlight-rules.com/spec/rules/openapi/info-contact/
    description: Info object must have "contact" object.
    message: Info object must have "contact" object.
    severity: info
    given: $
    then:
      field: info.contact
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-contact' (Info Contact). Requirement: Info object must
      have \"contact\" object. To fix: Ensure `info.contact` is present and
      non-empty at each matching location. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
