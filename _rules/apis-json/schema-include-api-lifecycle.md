---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-api-lifecycle
title: Schema Include API Lifecycle
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has an API Lifecycle
description: This property makes sure there is an API lifecycle schema defining
  all of the stages of a lifecycle and which policies get applied at each stage
  of the API lifecycle.
experience:
  - governance
  - versioning
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-api-lifecycle/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-api-lifecycle' (Schema Include API Lifecycle).
  Requirement: This property makes sure there is an API lifecycle schema
  defining all of the stages of a lifecycle and which policies get applied at
  each stage of the API lifecycle. To fix: Ensure `type` does NOT match the
  regular expression `\\b(lifecycle|Lifecycle)\\b`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-api-lifecycle:
    title: Schema Include API Lifecycle
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-api-lifecycle/
    description: This property makes sure there is an API lifecycle schema defining
      all of the stages of a lifecycle and which policies get applied at each
      stage of the API lifecycle.
    message: Has an API Lifecycle
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(lifecycle|Lifecycle)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:governance
      - experience:versioning
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-api-lifecycle' (Schema Include API
      Lifecycle). Requirement: This property makes sure there is an API lifecycle
      schema defining all of the stages of a lifecycle and which policies get
      applied at each stage of the API lifecycle. To fix: Ensure `type` does NOT
      match the regular expression `\\b(lifecycle|Lifecycle)\\b`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.apis.*.properties.* | $.common.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
