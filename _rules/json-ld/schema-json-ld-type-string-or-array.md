---
layout: rule
artifact: json-ld
artifact_label: JSON-LD
slug: schema-json-ld-type-string-or-array
title: Schema JSON LD Type String Or Array
severity: info
given: $['@type']
message: "@type should be a string or array."
description: "@type should be a string or an array of type strings."
experience:
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-ld/schema-json-ld-type-string-or-array/
prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
  governance rule 'schema-json-ld-type-string-or-array' (Schema JSON LD Type
  String Or Array). Requirement: @type should be a string or an array of type
  strings. To fix: Adjust the targeted value so it conforms to the schema this
  rule requires. This rule is evaluated at the JSONPath `$.@type` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  JSON-LD. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-json-ld-type-string-or-array:
    title: Schema JSON LD Type String Or Array
    reference: https://spotlight-rules.com/spec/rules/json-ld/schema-json-ld-type-string-or-array/
    description: "@type should be a string or an array of type strings."
    message: "@type should be a string or array."
    given: $['@type']
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type:
            - string
            - array
    tags:
      - format:json-ld
      - spec:document
      - experience:data-modeling
    prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
      governance rule 'schema-json-ld-type-string-or-array' (Schema JSON LD Type
      String Or Array). Requirement: @type should be a string or an array of type
      strings. To fix: Adjust the targeted value so it conforms to the schema this
      rule requires. This rule is evaluated at the JSONPath `$.@type` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      JSON-LD. Return only the complete corrected document, with no commentary."
---
