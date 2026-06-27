---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: openapi-tags-alphabetical
title: Openapi Tags Alphabetical
severity: info
given: $
message: OpenAPI object must have alphabetical "tags".
description: OpenAPI object must have alphabetical "tags".
experience:
  - consistency
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/openapi-tags-alphabetical/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'openapi-tags-alphabetical' (Openapi Tags Alphabetical).
  Requirement: OpenAPI object must have alphabetical \"tags\". To fix: Sort the
  entries by `name` into ascending alphabetical order. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  openapi-tags-alphabetical:
    title: Openapi Tags Alphabetical
    reference: https://spotlight-rules.com/spec/rules/openapi/openapi-tags-alphabetical/
    description: OpenAPI object must have alphabetical "tags".
    message: OpenAPI object must have alphabetical "tags".
    severity: info
    given: $
    then:
      field: tags
      function: alphabetical
      functionOptions:
        keyedBy: name
    tags:
      - format:openapi
      - spec:document
      - experience:consistency
      - experience:discoverability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'openapi-tags-alphabetical' (Openapi Tags Alphabetical).
      Requirement: OpenAPI object must have alphabetical \"tags\". To fix: Sort
      the entries by `name` into ascending alphabetical order. Make the smallest
      change that satisfies the rule, leave all unrelated content, key order,
      comments, and formatting unchanged, and keep the document valid OpenAPI.
      Return only the complete corrected document, with no commentary."
---
