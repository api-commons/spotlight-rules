---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-deprecation-policy
title: Schema Include Deprecation Policy
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Deprecation Policy
description: This property ensures that an API has a deprecation policy shared
  as part of the contract, communicating what the lifespan of APIs are, each
  individual version, as well as communication around the deprecation of APIs.
experience:
  - versioning
  - governance
spec:
  - apis
  - properties
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-deprecation-policy/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-deprecation-policy' (Schema Include
  Deprecation Policy). Requirement: This property ensures that an API has a
  deprecation policy shared as part of the contract, communicating what the
  lifespan of APIs are, each individual version, as well as communication around
  the deprecation of APIs. To fix: Ensure `type` does NOT match the regular
  expression
  `\\b(api-deprecation-policy|deprecation-policy|Deprecation|Deprecation
  Policy|DeprecationPolicy)\\b`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-deprecation-policy:
    title: Schema Include Deprecation Policy
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-deprecation-policy/
    description: This property ensures that an API has a deprecation policy shared
      as part of the contract, communicating what the lifespan of APIs are, each
      individual version, as well as communication around the deprecation of APIs.
    message: Has Deprecation Policy
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-deprecation-policy|deprecation-policy|Deprecation|Deprecation
            Policy|DeprecationPolicy)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - topic:deprecation
      - experience:versioning
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-deprecation-policy' (Schema Include
      Deprecation Policy). Requirement: This property ensures that an API has a
      deprecation policy shared as part of the contract, communicating what the
      lifespan of APIs are, each individual version, as well as communication
      around the deprecation of APIs. To fix: Ensure `type` does NOT match the
      regular expression
      `\\b(api-deprecation-policy|deprecation-policy|Deprecation|Deprecation
      Policy|DeprecationPolicy)\\b`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
