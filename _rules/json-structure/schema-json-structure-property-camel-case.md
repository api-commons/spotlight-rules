---
layout: rule
artifact: json-structure
artifact_label: JSON Structure
slug: schema-json-structure-property-camel-case
title: Schema JSON Structure Property Camel Case
severity: info
given: $.properties[*]~
message: Property is not camelCase.
description: Property names should be camelCase.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/json-structure/schema-json-structure-property-camel-case/
prompt: "You are editing a JSON Structure document to satisfy the Spotlight API
  governance rule 'schema-json-structure-property-camel-case' (Schema JSON
  Structure Property Camel Case). Requirement: Property names should be
  camelCase. To fix: Ensure the targeted value matches the regular expression
  `^[a-z][a-zA-Z0-9]*$`; rewrite any value that does not. This rule is evaluated
  at the JSONPath `$.properties[*]~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid JSON Structure. Return only the
  complete corrected document, with no commentary."
builtin: false
---
