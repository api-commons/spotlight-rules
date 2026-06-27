---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-modified-datetime-must-be-date-time
title: Schema Modified Datetime Must Be Date Time
severity: info
given: $..properties.modifiedDateTime
message: modifiedDateTime MUST use a data type of 'string' with the format 'date-time'.
description: modifiedDateTime MUST use a data type of 'string' with the format 'date-time'.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-modified-datetime-must-be-date-time/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-modified-datetime-must-be-date-time' (Schema Modified
  Datetime Must Be Date Time). Requirement: modifiedDateTime MUST use a data
  type of 'string' with the format 'date-time'. To fix: Ensure `type` matches
  the regular expression `^string$`; rewrite any value that does not. Also:
  Ensure `format` is present and non-empty at each matching location. Also:
  Ensure `format` matches the regular expression `^date-time$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath
  `$..properties.modifiedDateTime` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-modified-datetime-must-be-date-time:
    title: Schema Modified Datetime Must Be Date Time
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-modified-datetime-must-be-date-time/
    description: modifiedDateTime MUST use a data type of 'string' with the format
      'date-time'.
    message: modifiedDateTime MUST use a data type of 'string' with the format
      'date-time'.
    severity: info
    given: $..properties.modifiedDateTime
    then:
      - field: type
        function: pattern
        functionOptions:
          match: ^string$
      - field: format
        function: truthy
      - field: format
        function: pattern
        functionOptions:
          match: ^date-time$
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-modified-datetime-must-be-date-time' (Schema
      Modified Datetime Must Be Date Time). Requirement: modifiedDateTime MUST use
      a data type of 'string' with the format 'date-time'. To fix: Ensure `type`
      matches the regular expression `^string$`; rewrite any value that does not.
      Also: Ensure `format` is present and non-empty at each matching location.
      Also: Ensure `format` matches the regular expression `^date-time$`; rewrite
      any value that does not. This rule is evaluated at the JSONPath
      `$..properties.modifiedDateTime` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
