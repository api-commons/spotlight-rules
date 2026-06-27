---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-business-validator
title: Schema Include Business Validator
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has APIs.json (Business) Validator
description: This property ensures that there is a link to the validator for the APIs.
experience:
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-business-validator/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-business-validator' (Schema Include Business
  Validator). Requirement: This property ensures that there is a link to the
  validator for the APIs. To fix: Ensure `type` does NOT match the regular
  expression `\\b(OperationalValidation)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-business-validator:
    title: Schema Include Business Validator
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-business-validator/
    description: This property ensures that there is a link to the validator for the APIs.
    message: Has APIs.json (Business) Validator
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(OperationalValidation)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-business-validator' (Schema Include Business
      Validator). Requirement: This property ensures that there is a link to the
      validator for the APIs. To fix: Ensure `type` does NOT match the regular
      expression `\\b(OperationalValidation)\\b`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
