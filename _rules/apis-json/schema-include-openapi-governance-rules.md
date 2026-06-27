---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-openapi-governance-rules
title: Schema Include Openapi Governance Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has API Rules
description: This property ensures that an OpenAPI has support governance rules,
  that can be applied during design time via editors, development time via IDE,
  and run-time via CI/CD pipelines.
experience:
  - governance
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-openapi-governance-rules/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-openapi-governance-rules' (Schema Include
  Openapi Governance Rules). Requirement: This property ensures that an OpenAPI
  has support governance rules, that can be applied during design time via
  editors, development time via IDE, and run-time via CI/CD pipelines. To fix:
  Ensure `type` does NOT match the regular expression
  `\\b(api-rules|ApiRules)\\b`; rename or rewrite any value that does. This rule
  is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-openapi-governance-rules:
    title: Schema Include Openapi Governance Rules
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-openapi-governance-rules/
    description: This property ensures that an OpenAPI has support governance rules,
      that can be applied during design time via editors, development time via
      IDE, and run-time via CI/CD pipelines.
    message: Has API Rules
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-rules|ApiRules)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-openapi-governance-rules' (Schema Include
      Openapi Governance Rules). Requirement: This property ensures that an
      OpenAPI has support governance rules, that can be applied during design time
      via editors, development time via IDE, and run-time via CI/CD pipelines. To
      fix: Ensure `type` does NOT match the regular expression
      `\\b(api-rules|ApiRules)\\b`; rename or rewrite any value that does. This
      rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
