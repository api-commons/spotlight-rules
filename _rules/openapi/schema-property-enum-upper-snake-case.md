---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-enum-upper-snake-case
title: Schema Property Enum Upper Snake Case
severity: info
given: $.components.schemas.*.properties.*.enum.*
message: Schema Property Enum MUST Be Upper Snake Case
description: Schema property enumerators are consistent casing, keeping all
  entries upper snake case, and consistent across all APIs.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-enum-upper-snake-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-enum-upper-snake-case' (Schema Property Enum
  Upper Snake Case). Requirement: Schema property enumerators are consistent
  casing, keeping all entries upper snake case, and consistent across all APIs.
  To fix: Ensure the targeted value matches the regular expression
  `^[A-Z]+(?:_[A-Z]+)*$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.components.schemas.*.properties.*.enum.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-enum-upper-snake-case:
    title: Schema Property Enum Upper Snake Case
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-enum-upper-snake-case/
    description: Schema property enumerators are consistent casing, keeping all
      entries upper snake case, and consistent across all APIs.
    message: Schema Property Enum MUST Be Upper Snake Case
    severity: info
    given: $.components.schemas.*.properties.*.enum.*
    then:
      function: pattern
      functionOptions:
        match: ^[A-Z]+(?:_[A-Z]+)*$
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-enum-upper-snake-case' (Schema Property
      Enum Upper Snake Case). Requirement: Schema property enumerators are
      consistent casing, keeping all entries upper snake case, and consistent
      across all APIs. To fix: Ensure the targeted value matches the regular
      expression `^[A-Z]+(?:_[A-Z]+)*$`; rewrite any value that does not. This
      rule is evaluated at the JSONPath
      `$.components.schemas.*.properties.*.enum.*` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
