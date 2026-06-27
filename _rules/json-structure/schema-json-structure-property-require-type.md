---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: schema-json-structure-property-require-type
title: Schema JSON Structure Property Require Type
severity: info
given: $.properties[*]
message: Property should declare a type.
description: Properties should declare a type.
experience:
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-property-require-type/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'schema-json-structure-property-require-type' (Schema JSON
  Structure Property Require Type). Requirement: Properties should declare a
  type. To fix: Ensure `type` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath `$.properties[*]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid JSON
  Structure. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-json-structure-property-require-type:
    title: Schema JSON Structure Property Require Type
    reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-property-require-type/
    description: Properties should declare a type.
    message: Property should declare a type.
    given: $.properties[*]
    severity: info
    then:
      field: type
      function: truthy
    tags:
      - format:json-structure
      - spec:schemas
      - experience:data-modeling
    prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
      governance rule 'schema-json-structure-property-require-type' (Schema JSON
      Structure Property Require Type). Requirement: Properties should declare a
      type. To fix: Ensure `type` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$.properties[*]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid JSON
      Structure. Return only the complete corrected document, with no commentary."
---
