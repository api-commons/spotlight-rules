---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: schema-json-structure-root-type-object
title: Schema JSON Structure Root Type Object
severity: info
given: $.type
message: Root type should usually be object.
description: The root type of a JSON Structure document is typically object.
experience:
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-root-type-object/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'schema-json-structure-root-type-object' (Schema JSON
  Structure Root Type Object). Requirement: The root type of a JSON Structure
  document is typically object. To fix: Ensure the targeted value matches the
  regular expression `^object$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.type` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Structure. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-json-structure-root-type-object:
    title: Schema JSON Structure Root Type Object
    reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-root-type-object/
    description: The root type of a JSON Structure document is typically object.
    message: Root type should usually be object.
    given: $.type
    severity: info
    then:
      function: pattern
      functionOptions:
        match: ^object$
    tags:
      - format:json-structure
      - spec:document
      - experience:data-modeling
    prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
      governance rule 'schema-json-structure-root-type-object' (Schema JSON
      Structure Root Type Object). Requirement: The root type of a JSON Structure
      document is typically object. To fix: Ensure the targeted value matches the
      regular expression `^object$`; rewrite any value that does not. This rule is
      evaluated at the JSONPath `$.type` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid JSON Structure. Return only the
      complete corrected document, with no commentary."
---
