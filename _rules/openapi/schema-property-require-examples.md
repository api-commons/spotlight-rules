---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-require-examples
title: Schema Property Require Examples
severity: info
given: $..properties..properties.*
message: "{{description}}; {{property}}"
description: Object properties must include examples.
experience:
  - documentation
  - usability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-examples/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-require-examples' (Schema Property Require
  Examples). Requirement: Object properties must include examples. This rule is
  evaluated at the JSONPath `$..properties..properties.*` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-require-examples:
    title: Schema Property Require Examples
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-require-examples/
    description: Object properties must include examples.
    message: "{{description}}; {{property}}"
    severity: info
    given: $..properties..properties.*
    then:
      function: digitalocean:ensurePropertiesExample
    tags:
      - format:openapi
      - spec:schemas
      - experience:documentation
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-require-examples' (Schema Property Require
      Examples). Requirement: Object properties must include examples. This rule
      is evaluated at the JSONPath `$..properties..properties.*` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
