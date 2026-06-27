---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-channel-no-trailing-slash
title: Asyncapi 3 Channel No Trailing Slash
severity: info
given: $.channels.*
message: Channel address must not end with slash.
description: Channel address must not end with slash.
experience:
  - consistency
  - naming
spec:
  - channels
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-channel-no-trailing-slash/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-channel-no-trailing-slash' (Asyncapi 3 Channel No
  Trailing Slash). Requirement: Channel address must not end with slash. To fix:
  Ensure `address` does NOT match the regular expression `.+\\/$`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.channels.*` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  asyncapi-3-channel-no-trailing-slash:
    title: Asyncapi 3 Channel No Trailing Slash
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-channel-no-trailing-slash/
    description: Channel address must not end with slash.
    message: Channel address must not end with slash.
    severity: info
    given: $.channels.*
    then:
      field: address
      function: pattern
      functionOptions:
        notMatch: .+\/$
    tags:
      - format:asyncapi
      - spec:channels
      - experience:consistency
      - experience:naming
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-channel-no-trailing-slash' (Asyncapi 3 Channel
      No Trailing Slash). Requirement: Channel address must not end with slash. To
      fix: Ensure `address` does NOT match the regular expression `.+\\/$`; rename
      or rewrite any value that does. This rule is evaluated at the JSONPath
      `$.channels.*` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
