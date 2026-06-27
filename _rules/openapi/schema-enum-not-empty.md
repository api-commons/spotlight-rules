---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-enum-not-empty
title: Schema Enum Not Empty
severity: info
given: $..enum
message: enum should not be empty.
description: An enum should declare at least one value — an empty enum permits
  nothing and is almost always a mistake.
experience:
  - data-modeling
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-enum-not-empty/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-enum-not-empty' (Schema Enum Not Empty). Requirement:
  An enum should declare at least one value — an empty enum permits nothing and
  is almost always a mistake. To fix: Adjust the targeted value so it conforms
  to the schema this rule requires. This rule is evaluated at the JSONPath
  `$..enum` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-enum-not-empty:
    title: Schema Enum Not Empty
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-enum-not-empty/
    description: An enum should declare at least one value — an empty enum permits
      nothing and is almost always a mistake.
    message: enum should not be empty.
    given: $..enum
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: array
          minItems: 1
    tags:
      - format:openapi
      - spec:schemas
      - experience:data-modeling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-enum-not-empty' (Schema Enum Not Empty).
      Requirement: An enum should declare at least one value — an empty enum
      permits nothing and is almost always a mistake. To fix: Adjust the targeted
      value so it conforms to the schema this rule requires. This rule is
      evaluated at the JSONPath `$..enum` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
