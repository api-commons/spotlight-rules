---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: schema-json-structure-uri
title: Schema JSON Structure URI
severity: info
given: $.$schema
message: $schema should be a URI.
description: $schema should be the URI of the JSON Structure meta-schema.
experience:
  - consistency
  - discoverability
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-uri/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'schema-json-structure-uri' (Schema JSON Structure URI).
  Requirement: $schema should be the URI of the JSON Structure meta-schema. To
  fix: Ensure the targeted value matches the regular expression `^https?://`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.$schema` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid JSON Structure. Return only the complete corrected document,
  with no commentary."
builtin: false
---
