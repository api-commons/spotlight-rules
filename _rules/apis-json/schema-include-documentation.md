---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-documentation
title: Schema Include Documentation
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Documentation
description: This property ensures that there is documentation published for an
  API, and API consumers will have a set of human-readable instructions for
  onboarding and integrating with HTTP APIs in their applications.
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-documentation/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-documentation' (Schema Include Documentation).
  Requirement: This property ensures that there is documentation published for
  an API, and API consumers will have a set of human-readable instructions for
  onboarding and integrating with HTTP APIs in their applications. To fix:
  Ensure `type` does NOT match the regular expression
  `\\b(documentation|Documentation)\\b`; rename or rewrite any value that does.
  This rule is evaluated at the JSONPath `$.apis.*.properties.* | $.common.*` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  APIs.json. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  schema-include-documentation:
    title: Schema Include Documentation
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-documentation/
    description: This property ensures that there is documentation published for an
      API, and API consumers will have a set of human-readable instructions for
      onboarding and integrating with HTTP APIs in their applications.
    message: Has Documentation
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(documentation|Documentation)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:documentation
      - experience:usability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-documentation' (Schema Include
      Documentation). Requirement: This property ensures that there is
      documentation published for an API, and API consumers will have a set of
      human-readable instructions for onboarding and integrating with HTTP APIs in
      their applications. To fix: Ensure `type` does NOT match the regular
      expression `\\b(documentation|Documentation)\\b`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
