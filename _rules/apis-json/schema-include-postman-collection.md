---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-postman-collection
title: Schema Include Postman Collection
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Postman Collection
description: This property ensures that an API has at least one Postman
  Collection associated with it, providing automation, tests, and other
  executable derivatives of an APIs OpenAPI.
experience:
  - usability
  - documentation
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-postman-collection/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-postman-collection' (Schema Include Postman
  Collection). Requirement: This property ensures that an API has at least one
  Postman Collection associated with it, providing automation, tests, and other
  executable derivatives of an APIs OpenAPI. To fix: Ensure `type` does NOT
  match the regular expression `\\b(PostmanCollection)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-postman-collection:
    title: Schema Include Postman Collection
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-postman-collection/
    description: This property ensures that an API has at least one Postman
      Collection associated with it, providing automation, tests, and other
      executable derivatives of an APIs OpenAPI.
    message: Has a Postman Collection
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(PostmanCollection)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:documentation
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-postman-collection' (Schema Include Postman
      Collection). Requirement: This property ensures that an API has at least one
      Postman Collection associated with it, providing automation, tests, and
      other executable derivatives of an APIs OpenAPI. To fix: Ensure `type` does
      NOT match the regular expression `\\b(PostmanCollection)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
