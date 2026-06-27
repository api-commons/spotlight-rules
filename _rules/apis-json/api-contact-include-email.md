---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-contact-include-email
title: API Contact Include Email
severity: info
given: $.apis.*.contact.*
message: API contact COULD have email.
description: The contact object in an APIs.json file allows for referencing the
  email address of a person or group. This property provides a convenient way
  for users to seek support for an API, using email as the default method to
  reach the team managing the API in production.
experience:
  - documentation
  - discoverability
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-contact-include-email/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-contact-include-email' (API Contact Include Email).
  Requirement: The contact object in an APIs.json file allows for referencing
  the email address of a person or group. This property provides a convenient
  way for users to seek support for an API, using email as the default method to
  reach the team managing the API in production. To fix: Ensure `email` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.apis.*.contact.*` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid APIs.json. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  api-contact-include-email:
    title: API Contact Include Email
    reference: https://spotlight-rules.com/spec/rules/apis-json/api-contact-include-email/
    description: The contact object in an APIs.json file allows for referencing the
      email address of a person or group. This property provides a convenient way
      for users to seek support for an API, using email as the default method to
      reach the team managing the API in production.
    message: API contact COULD have email.
    severity: info
    given: $.apis.*.contact.*
    then:
      field: email
      function: truthy
    tags:
      - format:apis-json
      - spec:apis
      - experience:documentation
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'api-contact-include-email' (API Contact Include Email).
      Requirement: The contact object in an APIs.json file allows for referencing
      the email address of a person or group. This property provides a convenient
      way for users to seek support for an API, using email as the default method
      to reach the team managing the API in production. To fix: Ensure `email` is
      present and non-empty at each matching location. This rule is evaluated at
      the JSONPath `$.apis.*.contact.*` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid APIs.json. Return only the complete
      corrected document, with no commentary."
---
