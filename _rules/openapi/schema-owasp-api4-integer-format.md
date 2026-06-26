---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-owasp-api4-integer-format
title: Schema OWASP API4 Integer Format
severity: info
given: $..properties[?(@ && @.type == 'integer')]
message: Integer property should declare a format (int32 or int64).
description: Integer properties should declare a format (int32 / int64) so their
  range is bounded (OWASP API4 — unrestricted resource consumption).
experience:
  - security
spec:
  - schemas
topic: []
owasp:
  - api4
reference: https://spotlight-rules.com/spec/rules/openapi/schema-owasp-api4-integer-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-owasp-api4-integer-format' (Schema OWASP API4 Integer
  Format). Requirement: Integer properties should declare a format (int32 /
  int64) so their range is bounded (OWASP API4 — unrestricted resource
  consumption). To fix: Ensure `format` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$..properties[?(@
  && @.type == 'integer')]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
