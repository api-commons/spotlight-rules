---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-require-type
title: Schema Property Require Type
severity: info
given: $..properties.*
message: "{{error}}"
description: Schema properties must have a type defined.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-require-type' (Schema Property Require Type).
  Requirement: Schema properties must have a type defined. This rule is
  evaluated at the JSONPath `$..properties.*` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-require-type:
    title: Schema Property Require Type
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-type/
    description: Schema properties must have a type defined.
    message: "{{error}}"
    severity: info
    given: $..properties.*
    then:
      function: digitalocean:ensureSchemaHasType
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-require-type' (Schema Property Require
      Type). Requirement: Schema properties must have a type defined. This rule is
      evaluated at the JSONPath `$..properties.*` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
