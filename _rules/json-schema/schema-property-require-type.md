---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: schema-property-require-type
title: Schema Property Require Type
severity: info
given: $.properties[*]
message: type should be present
description: The `type` property of each property should be present.
experience:
  - data-modeling
  - consistency
spec:
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/schema-property-require-type/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'schema-property-require-type' (Schema Property Require Type).
  Requirement: The `type` property of each property should be present. To fix:
  Ensure `type` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.properties[*]` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid JSON Schema. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-require-type:
    title: Schema Property Require Type
    reference: https://spotlight-rules.com/spec/rules/json-schema/schema-property-require-type/
    description: The `type` property of each property should be present.
    message: type should be present
    severity: info
    given: $.properties[*]
    then:
      field: type
      function: truthy
    tags:
      - format:jsonschema
      - spec:properties
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'schema-property-require-type' (Schema Property Require
      Type). Requirement: The `type` property of each property should be present.
      To fix: Ensure `type` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$.properties[*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid JSON
      Schema. Return only the complete corrected document, with no commentary."
---
