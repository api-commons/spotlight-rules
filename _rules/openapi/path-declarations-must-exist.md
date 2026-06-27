---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-declarations-must-exist
title: Path Declarations Must Exist
severity: info
given: $.paths
message: Path parameter declarations must not be empty, ex."/given/{}" is invalid.
description: Path Declarations Must Exist.
experience:
  - reliability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-declarations-must-exist/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-declarations-must-exist' (Path Declarations Must Exist).
  Requirement: Path Declarations Must Exist. To fix: Ensure `@key` does NOT
  match the regular expression `{}`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.paths` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  path-declarations-must-exist:
    title: Path Declarations Must Exist
    reference: https://spotlight-rules.com/spec/rules/openapi/path-declarations-must-exist/
    description: Path Declarations Must Exist.
    message: Path parameter declarations must not be empty, ex."/given/{}" is invalid.
    severity: info
    given: $.paths
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: "{}"
    tags:
      - format:openapi
      - spec:paths
      - experience:reliability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-declarations-must-exist' (Path Declarations Must
      Exist). Requirement: Path Declarations Must Exist. To fix: Ensure `@key`
      does NOT match the regular expression `{}`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$.paths` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
