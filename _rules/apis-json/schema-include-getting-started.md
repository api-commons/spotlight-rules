---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: schema-include-getting-started
title: Schema Include Getting Started
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has Getting Started
description: This property ensures that there is a getting started link
  available, providing a reference for API consumers to get started with an API
  is as few steps as possible.
experience:
  - documentation
  - usability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-getting-started/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'schema-include-getting-started' (Schema Include Getting
  Started). Requirement: This property ensures that there is a getting started
  link available, providing a reference for API consumers to get started with an
  API is as few steps as possible. To fix: Ensure `type` does NOT match the
  regular expression `\\b(GettingStarted)\\b`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
  $.common.*` — inspect every location it matches and correct only what violates
  the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid APIs.json. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  schema-include-getting-started:
    title: Schema Include Getting Started
    reference: https://spotlight-rules.com/spec/rules/apis-json/schema-include-getting-started/
    description: This property ensures that there is a getting started link
      available, providing a reference for API consumers to get started with an
      API is as few steps as possible.
    message: Has Getting Started
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(GettingStarted)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:documentation
      - experience:usability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'schema-include-getting-started' (Schema Include Getting
      Started). Requirement: This property ensures that there is a getting started
      link available, providing a reference for API consumers to get started with
      an API is as few steps as possible. To fix: Ensure `type` does NOT match the
      regular expression `\\b(GettingStarted)\\b`; rename or rewrite any value
      that does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
