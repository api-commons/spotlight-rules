---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-use-fingerprint-not-hash
title: Schema Use Fingerprint Not Hash
severity: info
given: $.components.schemas..properties.*~
message: "{{property}} is not using property name fingerprint."
description: Rather than property names refering to the implementation for
  'hash' or 'hashkey', you MUST use the property name 'fingerprint'.
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-use-fingerprint-not-hash/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-use-fingerprint-not-hash' (Schema Use Fingerprint Not
  Hash). Requirement: Rather than property names refering to the implementation
  for 'hash' or 'hashkey', you MUST use the property name 'fingerprint'. To fix:
  Ensure the targeted value does NOT match the regular expression
  `^hashkey|hashKey|hash$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.components.schemas..properties.*~` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-use-fingerprint-not-hash:
    title: Schema Use Fingerprint Not Hash
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-use-fingerprint-not-hash/
    description: Rather than property names refering to the implementation for
      'hash' or 'hashkey', you MUST use the property name 'fingerprint'.
    message: "{{property}} is not using property name fingerprint."
    severity: info
    given: $.components.schemas..properties.*~
    then:
      function: pattern
      functionOptions:
        notMatch: ^hashkey|hashKey|hash$
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:schemas
      - spec:components
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-use-fingerprint-not-hash' (Schema Use Fingerprint
      Not Hash). Requirement: Rather than property names refering to the
      implementation for 'hash' or 'hashkey', you MUST use the property name
      'fingerprint'. To fix: Ensure the targeted value does NOT match the regular
      expression `^hashkey|hashKey|hash$`; rename or rewrite any value that does.
      This rule is evaluated at the JSONPath `$.components.schemas..properties.*~`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
