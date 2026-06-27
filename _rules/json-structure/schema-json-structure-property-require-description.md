---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: schema-json-structure-property-require-description
title: Schema JSON Structure Property Require Description
severity: info
given: $.properties[*]
message: Property should have a description.
description: Properties should be documented with a description.
experience:
  - documentation
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-property-require-description/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'schema-json-structure-property-require-description' (Schema
  JSON Structure Property Require Description). Requirement: Properties should
  be documented with a description. To fix: Ensure `description` is present and
  non-empty at each matching location. This rule is evaluated at the JSONPath
  `$.properties[*]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid JSON Structure. Return only the complete corrected document,
  with no commentary."
builtin: false
ruleyaml: >
  schema-json-structure-property-require-description:
    title: Schema JSON Structure Property Require Description
    reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-property-require-description/
    description: Properties should be documented with a description.
    message: Property should have a description.
    given: $.properties[*]
    severity: info
    then:
      field: description
      function: truthy
    tags:
      - format:json-structure
      - spec:schemas
      - experience:documentation
    prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
      governance rule 'schema-json-structure-property-require-description' (Schema
      JSON Structure Property Require Description). Requirement: Properties should
      be documented with a description. To fix: Ensure `description` is present
      and non-empty at each matching location. This rule is evaluated at the
      JSONPath `$.properties[*]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid JSON Structure. Return only the
      complete corrected document, with no commentary."
---
