---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-use-id-not-identifier
title: Schema Use ID Not Identifier
severity: info
given: $..properties.*~
message: Use abbreviations instead of long form names, i.e.
description: Use abbreviations instead of long form names, i.e. identifier SHOULD BE id.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-use-id-not-identifier/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-use-id-not-identifier' (Schema Use ID Not Identifier).
  Requirement: Use abbreviations instead of long form names, i.e. identifier
  SHOULD BE id. To fix: Ensure the targeted value does NOT match the regular
  expression `^identifier$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$..properties.*~` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
