---
layout: rule
artifact: json-ld
artifact_label: JSON-LD
slug: schema-json-ld-context-uri-or-object
title: Schema JSON LD Context URI Or Object
severity: info
given: $['@context']
message: "@context should be a URI, object, or array."
description: "@context should be a URI string, an inline object, or an array of those."
experience:
  - data-modeling
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-ld/schema-json-ld-context-uri-or-object/
prompt: "You are editing a JSON-LD document to satisfy the Spotlight API
  governance rule 'schema-json-ld-context-uri-or-object' (Schema JSON LD Context
  URI Or Object). Requirement: @context should be a URI string, an inline
  object, or an array of those. To fix: Adjust the targeted value so it conforms
  to the schema this rule requires. This rule is evaluated at the JSONPath
  `$.@context` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid JSON-LD. Return only the complete corrected document, with no
  commentary."
builtin: false
---
