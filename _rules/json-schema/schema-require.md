---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: schema-require
title: Schema Require
severity: info
given: $
message: $schema should be present
description: The `$schema` property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/schema-require/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'schema-require' (Schema Require). Requirement: The `$schema`
  property should be present. To fix: Ensure `$schema` is present and non-empty
  at each matching location. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid JSON Schema. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  schema-require:
    title: Schema Require
    reference: https://spotlight-rules.com/spec/rules/json-schema/schema-require/
    description: The `$schema` property should be present.
    message: $schema should be present
    severity: info
    given: $
    then:
      field: $schema
      function: truthy
    tags:
      - format:jsonschema
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'schema-require' (Schema Require). Requirement: The
      `$schema` property should be present. To fix: Ensure `$schema` is present
      and non-empty at each matching location. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid JSON Schema. Return only
      the complete corrected document, with no commentary."
---
