---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-trailing-slash-in
title: Path No Trailing Slash In
severity: info
given: $.paths.*~
message: A resource MUST be addressable without a trailing slash on the path.
description: A resource MUST be addressable without a trailing slash on the path.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-trailing-slash-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-trailing-slash-in' (Path No Trailing Slash In).
  Requirement: A resource MUST be addressable without a trailing slash on the
  path. To fix: Ensure the targeted value does NOT match the regular expression
  `/$`; rename or rewrite any value that does. This rule is evaluated at the
  JSONPath `$.paths.*~` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  path-no-trailing-slash-in:
    title: Path No Trailing Slash In
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-trailing-slash-in/
    description: A resource MUST be addressable without a trailing slash on the path.
    message: A resource MUST be addressable without a trailing slash on the path.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: /$
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-trailing-slash-in' (Path No Trailing Slash In).
      Requirement: A resource MUST be addressable without a trailing slash on the
      path. To fix: Ensure the targeted value does NOT match the regular
      expression `/$`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$.paths.*~` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
