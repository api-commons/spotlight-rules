---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-require-at-least-one
title: Tag Require At Least One
severity: info
given: $
message: MUST Be At Least One Tag
description: There needs to be at least one tag applied to an OpenAPI, providing
  a key word or phrase that can be applied to API operations.
experience:
  - discoverability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-require-at-least-one/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-require-at-least-one' (Tag Require At Least One).
  Requirement: There needs to be at least one tag applied to an OpenAPI,
  providing a key word or phrase that can be applied to API operations. To fix:
  Ensure the length of `tags` is at least 1. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  tag-require-at-least-one:
    title: Tag Require At Least One
    reference: https://spotlight-rules.com/spec/rules/openapi/tag-require-at-least-one/
    description: There needs to be at least one tag applied to an OpenAPI, providing
      a key word or phrase that can be applied to API operations.
    message: MUST Be At Least One Tag
    severity: info
    given: $
    then:
      field: tags
      function: length
      functionOptions:
        min: 1
    tags:
      - format:openapi
      - spec:document
      - experience:discoverability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'tag-require-at-least-one' (Tag Require At Least One).
      Requirement: There needs to be at least one tag applied to an OpenAPI,
      providing a key word or phrase that can be applied to API operations. To
      fix: Ensure the length of `tags` is at least 1. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
