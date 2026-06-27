---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-date-time-property-require-format
title: Schema Date Time Property Require Format
severity: info
given: $..properties[?(
  @property.match(/(_at$|_date$|_time$|At$|Date$|Time$|timestamp)/i) && @.type
  == 'string' )]
message: Date/time string property should declare a format (e.g. date-time).
description: Date/time string properties (createdAt, updated_at, *_date,
  timestamp, …) should declare a format such as date-time (RFC 3339) so the
  value is unambiguous and machine-validatable.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-date-time-property-require-format/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-date-time-property-require-format' (Schema Date Time
  Property Require Format). Requirement: Date/time string properties (createdAt,
  updated_at, *_date, timestamp, …) should declare a format such as date-time
  (RFC 3339) so the value is unambiguous and machine-validatable. To fix: Ensure
  `format` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$..properties[?(
  @property.match(/(_at$|_date$|_time$|At$|Date$|Time$|timestamp)/i) && @.type
  == 'string' )]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-date-time-property-require-format:
    title: Schema Date Time Property Require Format
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-date-time-property-require-format/
    description: Date/time string properties (createdAt, updated_at, *_date,
      timestamp, …) should declare a format such as date-time (RFC 3339) so the
      value is unambiguous and machine-validatable.
    message: Date/time string property should declare a format (e.g. date-time).
    given: $..properties[?(
      @property.match(/(_at$|_date$|_time$|At$|Date$|Time$|timestamp)/i) && @.type
      == 'string' )]
    severity: info
    then:
      field: format
      function: truthy
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-date-time-property-require-format' (Schema Date Time
      Property Require Format). Requirement: Date/time string properties
      (createdAt, updated_at, *_date, timestamp, …) should declare a format such
      as date-time (RFC 3339) so the value is unambiguous and machine-validatable.
      To fix: Ensure `format` is present and non-empty at each matching location.
      This rule is evaluated at the JSONPath `$..properties[?(
      @property.match(/(_at$|_date$|_time$|At$|Date$|Time$|timestamp)/i) && @.type
      == 'string' )]` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
