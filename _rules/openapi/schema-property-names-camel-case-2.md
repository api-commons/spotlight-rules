---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-names-camel-case-2
title: Schema Property Names Camel Case 2
severity: info
given: $..properties.*~
message: Property names and acronyms MUST be in camelCase.
description: Property names and acronyms MUST be in camelCase.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-names-camel-case-2/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-names-camel-case-2' (Schema Property Names
  Camel Case 2). Requirement: Property names and acronyms MUST be in camelCase.
  To fix: Ensure the targeted value matches the regular expression
  `^[a-z][a-z0-9]*(([A-Z]{2}|[A-Z])[a-z0-9]+)*$`; rewrite any value that does
  not. This rule is evaluated at the JSONPath `$..properties.*~` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
