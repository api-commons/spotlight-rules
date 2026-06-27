---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-linting-rules
title: API Property Require Linting Rules
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Linting Rules
description: This property ensures that an API has governance rules applied,
  usually as part of a central set of governance rules, defined by policy, or
  stages of the API lifecycle.
experience:
  - governance
  - consistency
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-linting-rules/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-linting-rules' (API Property Require
  Linting Rules). Requirement: This property ensures that an API has governance
  rules applied, usually as part of a central set of governance rules, defined
  by policy, or stages of the API lifecycle. To fix: Ensure `type` does NOT
  match the regular expression `\\b(api-rules|OpenApiRules)\\b`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-linting-rules:
    title: API Property Require Linting Rules
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-linting-rules/
    description: This property ensures that an API has governance rules applied,
      usually as part of a central set of governance rules, defined by policy, or
      stages of the API lifecycle.
    message: Has Linting Rules
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(api-rules|OpenApiRules)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
      - experience:consistency
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-linting-rules' (API Property Require
      Linting Rules). Requirement: This property ensures that an API has
      governance rules applied, usually as part of a central set of governance
      rules, defined by policy, or stages of the API lifecycle. To fix: Ensure
      `type` does NOT match the regular expression
      `\\b(api-rules|OpenApiRules)\\b`; rename or rewrite any value that does.
      This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid APIs.json. Return only the complete corrected document, with
      no commentary."
---
