---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-created-datetime-must-be-date-time
title: Schema Created Datetime Must Be Date Time
severity: info
given: $..properties.createdDateTime
message: createdDateTime MUST use a data type of 'string' with the format 'date-time'.
description: createdDateTime MUST use a data type of 'string' with the format 'date-time'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-created-datetime-must-be-date-time/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-created-datetime-must-be-date-time' (Schema Created
  Datetime Must Be Date Time). Requirement: createdDateTime MUST use a data type
  of 'string' with the format 'date-time'. To fix: Ensure `type` matches the
  regular expression `^string$`; rewrite any value that does not. Also: Ensure
  `format` is present and non-empty at each matching location. Also: Ensure
  `format` matches the regular expression `^date-time$`; rewrite any value that
  does not. This rule is evaluated at the JSONPath
  `$..properties.createdDateTime` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
