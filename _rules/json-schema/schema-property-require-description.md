---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: schema-property-require-description
title: Schema Property Require Description
severity: info
given: $.properties[*]
message: description should be present
description: The `description` property of each property should be present.
experience:
  - documentation
  - data-modeling
spec:
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-schema/schema-property-require-description/
prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
  governance rule 'schema-property-require-description' (Schema Property Require
  Description). Requirement: The `description` property of each property should
  be present. To fix: Ensure `description` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.properties[*]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  JSON Schema. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-require-description:
    title: Schema Property Require Description
    reference: https://spotlight-rules.com/spec/rules/json-schema/schema-property-require-description/
    description: The `description` property of each property should be present.
    message: description should be present
    severity: info
    given: $.properties[*]
    then:
      field: description
      function: truthy
    tags:
      - format:jsonschema
      - spec:properties
      - experience:documentation
      - experience:data-modeling
    prompt: "You are editing a JSON Schema document to satisfy the Spotlight API
      governance rule 'schema-property-require-description' (Schema Property
      Require Description). Requirement: The `description` property of each
      property should be present. To fix: Ensure `description` is present and
      non-empty at each matching location. This rule is evaluated at the JSONPath
      `$.properties[*]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid JSON Schema. Return only the complete corrected
      document, with no commentary."
---
