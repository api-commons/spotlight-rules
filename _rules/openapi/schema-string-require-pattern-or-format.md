---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-string-require-pattern-or-format
title: Schema String Require Pattern Or Format
severity: info
given: $.[?(@.type=="string" && !@.enum && @.format!="date" && @.format
  !="date-time" )]
message: Strings (non enum) must specify a pattern or a format. {{path}}
description: "String length should be limited to avoid an attacker to send very
  long strings to your service. You can do this in different ways: - specify a
  `maxLength` - constraint the possible values with an `enum` - use a
  constrained `format` like `date` or `date-time`. A constrained string using
  the `date` format. ``` ConstrainedString: type: string format: date ```
  Another constrained string using `maxLength`. You can always add further
  constraints using a `pattern` or a `format`. ``` ZipCode: type: string
  maxLength: 5 pattern: '[0-9]{5}' ``` For further security, you can always
  limit string length even in conjunction with `format` and `pattern`."
experience:
  - security
  - data-modeling
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-string-require-pattern-or-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-string-require-pattern-or-format' (Schema String
  Require Pattern Or Format). Requirement: String length should be limited to
  avoid an attacker to send very long strings to your service. You can do this
  in different ways: - specify a `maxLength` - constraint the possible values
  with an `enum` - use a constrained `format` like `date` or `date-time`. A
  constrained string using the `date` format. ``` ConstrainedString: type:
  string format: date ``` Another constrained string using `maxLength`. You can
  always add further constraints using a `pattern` or a `format`. ``` ZipCode:
  type: string maxLength: 5 pattern: '[0-9]{5}' ``` For further security, you
  can always limit string length even in conjunction with `format` and
  `pattern`. To fix: Adjust the targeted value so it conforms to the schema this
  rule requires. This rule is evaluated at the JSONPath `$.[?(@.type==\"string\"
  && !@.enum && @.format!=\"date\" && @.format !=\"date-time\" )]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
