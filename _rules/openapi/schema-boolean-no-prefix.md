---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-boolean-no-prefix
title: Schema Boolean No Prefix
severity: info
given: $..properties[?(@ && @.type == 'boolean')]~
message: Boolean properties SHOULD NOT use is, has, or another prefix.
description: Boolean properties SHOULD NOT use is, has, or another prefix.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-boolean-no-prefix/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-boolean-no-prefix' (Schema Boolean No Prefix).
  Requirement: Boolean properties SHOULD NOT use is, has, or another prefix. To
  fix: Ensure the targeted value does NOT match the regular expression
  `^(is|has|was|will|needs|uses|should|can)([A-Z]|$).*`; rename or rewrite any
  value that does. This rule is evaluated at the JSONPath `$..properties[?(@ &&
  @.type == 'boolean')]~` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
