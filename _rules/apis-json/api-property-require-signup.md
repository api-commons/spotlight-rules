---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-property-require-signup
title: API Property Require Signup
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a Sign Up
description: This property ensures there is a link to where you sign up for an
  API, making sure API consumers can access in a single click.
experience:
  - usability
  - discoverability
spec:
  - apis
  - properties
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-signup/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-property-require-signup' (API Property Require Signup).
  Requirement: This property ensures there is a link to where you sign up for an
  API, making sure API consumers can access in a single click. To fix: Ensure
  `type` does NOT match the regular expression `\\b(X-signup|signup|Sign
  Up|SignUp)\\b`; rename or rewrite any value that does. This rule is evaluated
  at the JSONPath `$.apis.*.properties.* | $.common.*` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  api-property-require-signup:
    title: API Property Require Signup
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-property-require-signup/
    description: This property ensures there is a link to where you sign up for an
      API, making sure API consumers can access in a single click.
    message: Has a Sign Up
    severity: info
    given:
      - $.apis.*.properties.*
      - $.common.*
    then:
      - field: type
        function: pattern
        functionOptions:
          notMatch: \b(X-signup|signup|Sign Up|SignUp)\b
    tags:
      - format:apis-json
      - spec:apis
      - spec:properties
      - experience:usability
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-property-require-signup' (API Property Require Signup).
      Requirement: This property ensures there is a link to where you sign up for
      an API, making sure API consumers can access in a single click. To fix:
      Ensure `type` does NOT match the regular expression
      `\\b(X-signup|signup|Sign Up|SignUp)\\b`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$.apis.*.properties.* |
      $.common.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid APIs.json. Return only the complete corrected
      document, with no commentary."
---
