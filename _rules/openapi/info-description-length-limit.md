---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-length-limit
title: Info Description Length Limit
severity: info
given: $.info
message: Info description MUST be less than 500 characters.
description: Having a restriction on the length of the API description expressed
  as the OpenAPI info description helps provide constraints for consumers when
  adding a description, and keeps portals, landing pages, documentation, and
  discovery results more consistent.
experience:
  - documentation
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-description-length-limit/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-description-length-limit' (Info Description Length
  Limit). Requirement: Having a restriction on the length of the API description
  expressed as the OpenAPI info description helps provide constraints for
  consumers when adding a description, and keeps portals, landing pages,
  documentation, and discovery results more consistent. To fix: Ensure the
  length of `description` is at most 500. This rule is evaluated at the JSONPath
  `$.info` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  info-description-length-limit:
    title: Info Description Length Limit
    reference: https://spotlight-rules.com/spec/rules/openapi/info-description-length-limit/
    description: Having a restriction on the length of the API description expressed
      as the OpenAPI info description helps provide constraints for consumers when
      adding a description, and keeps portals, landing pages, documentation, and
      discovery results more consistent.
    message: Info description MUST be less than 500 characters.
    severity: info
    given: $.info
    then:
      field: description
      function: length
      functionOptions:
        max: 500
    tags:
      - format:openapi
      - spec:info
      - experience:documentation
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-description-length-limit' (Info Description Length
      Limit). Requirement: Having a restriction on the length of the API
      description expressed as the OpenAPI info description helps provide
      constraints for consumers when adding a description, and keeps portals,
      landing pages, documentation, and discovery results more consistent. To fix:
      Ensure the length of `description` is at most 500. This rule is evaluated at
      the JSONPath `$.info` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
