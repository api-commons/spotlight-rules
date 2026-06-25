---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: string-require-pattern-or-format
title: String Require Pattern Or Format
severity: hint
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
  limit string length even in conjunction with `format` and `pattern`. It
  validates the targeted value against a JSON Schema (evaluated at
  `$.[?(@.type==\"string\" && !@.enum && @.format!=\"date\" && @.format
  !=\"date-time\" )]`). Severity: hint."
experience:
  - security
  - data-modeling
spec:
  - document
source:
  - team-digitale
builtin: false
---
