---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-operational-rules
title: Schema Include Operational Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Operational Rules
description: This property ensures that an API has operational level rules for APIs.
experience:
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-operational-rules/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-operational-rules' (Schema Include Operational
  Rules). Requirement: This property ensures that an API has operational level
  rules for APIs. To fix: Ensure `type` does NOT match the regular expression
  `\\b(operational-rules|OperationalRules)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-operational-rules:
    title: Schema Include Operational Rules
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-operational-rules/
    description: This property ensures that an API has operational level rules for APIs.
    message: Has Operational Rules
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(operational-rules|OperationalRules)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-operational-rules' (Schema Include
      Operational Rules). Requirement: This property ensures that an API has
      operational level rules for APIs. To fix: Ensure `type` does NOT match the
      regular expression `\\b(operational-rules|OperationalRules)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
