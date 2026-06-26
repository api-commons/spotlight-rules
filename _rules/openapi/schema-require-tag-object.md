---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-require-tag-object
title: Schema Require Tag Object
severity: info
given: $
message: OpenAPIs MUST Have a Tag Object
description: There needs to be a central tags object applied to the OpenAPI,
  providing central tags that can be applied across all operations within an
  OpenAPI.
experience:
  - discoverability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-require-tag-object/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-require-tag-object' (Schema Require Tag Object).
  Requirement: There needs to be a central tags object applied to the OpenAPI,
  providing central tags that can be applied across all operations within an
  OpenAPI. To fix: Ensure `tags` is present and non-empty at each matching
  location. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
