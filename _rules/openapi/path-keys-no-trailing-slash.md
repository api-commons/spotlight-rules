---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-keys-no-trailing-slash
title: Path Keys No Trailing Slash
severity: info
given: $.paths
message: Path must not end with slash.
description: Path Keys No Trailing Slash.
experience:
  - consistency
  - naming
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-keys-no-trailing-slash/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-keys-no-trailing-slash' (Path Keys No Trailing Slash).
  Requirement: Path Keys No Trailing Slash. To fix: Ensure `@key` does NOT match
  the regular expression `.+\\/$`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.paths` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  path-keys-no-trailing-slash:
    title: Path Keys No Trailing Slash
    reference: https://spotlight-rules.com/spec/rules/openapi/path-keys-no-trailing-slash/
    description: Path Keys No Trailing Slash.
    message: Path must not end with slash.
    severity: info
    given: $.paths
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: .+\/$
    tags:
      - format:openapi
      - spec:paths
      - experience:consistency
      - experience:naming
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-keys-no-trailing-slash' (Path Keys No Trailing Slash).
      Requirement: Path Keys No Trailing Slash. To fix: Ensure `@key` does NOT
      match the regular expression `.+\\/$`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$.paths` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
