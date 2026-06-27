---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-info-object
title: Schema Require Info Object
severity: info
given: $
message: Info Object MUST Exist
description: Having an info object provides much of the metadata needed for the
  collection of APIs described in an OpenAPI.
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-info-object/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-require-info-object' (Schema Require Info Object).
  Requirement: Having an info object provides much of the metadata needed for
  the collection of APIs described in an OpenAPI. To fix: Ensure `info` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-require-info-object:
    title: Schema Require Info Object
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-info-object/
    description: Having an info object provides much of the metadata needed for the
      collection of APIs described in an OpenAPI.
    message: Info Object MUST Exist
    severity: info
    given: $
    then:
      field: info
      function: truthy
    tags:
      - format:openapi
      - spec:document
      - experience:documentation
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-require-info-object' (Schema Require Info Object).
      Requirement: Having an info object provides much of the metadata needed for
      the collection of APIs described in an OpenAPI. To fix: Ensure `info` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
