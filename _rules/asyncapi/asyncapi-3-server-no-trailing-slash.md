---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-server-no-trailing-slash
title: Asyncapi 3 Server No Trailing Slash
severity: info
given: $.servers.*.host
message: Server host must not end with slash.
description: Server host must not end with slash.
experience:
  - consistency
  - reliability
spec:
  - servers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-server-no-trailing-slash/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-server-no-trailing-slash' (Asyncapi 3 Server No
  Trailing Slash). Requirement: Server host must not end with slash. To fix:
  Ensure the targeted value does NOT match the regular expression `/$`; rename
  or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.servers.*.host` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: true
ruleyaml: >
  asyncapi-3-server-no-trailing-slash:
    title: Asyncapi 3 Server No Trailing Slash
    reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-server-no-trailing-slash/
    description: Server host must not end with slash.
    message: Server host must not end with slash.
    severity: info
    given: $.servers.*.host
    then:
      function: pattern
      functionOptions:
        notMatch: /$
    tags:
      - format:asyncapi
      - spec:servers
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
      governance rule 'asyncapi-3-server-no-trailing-slash' (Asyncapi 3 Server No
      Trailing Slash). Requirement: Server host must not end with slash. To fix:
      Ensure the targeted value does NOT match the regular expression `/$`; rename
      or rewrite any value that does. This rule is evaluated at the JSONPath
      `$.servers.*.host` — inspect every location it matches and correct only what
      violates the rule. Make the smallest change that satisfies the rule, leave
      all unrelated content, key order, comments, and formatting unchanged, and
      keep the document valid AsyncAPI. Return only the complete corrected
      document, with no commentary."
---
