---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-version-semantic-and-stable
title: Info Version Semantic And Stable
severity: info
given: $.info.version
message: "{{description}}: {{error}}"
description: The API contract MUST have a stable version and MUST follow
  semantic versioning (e.g., '1.0.0'). Words like 'SNAPSHOT' or 'RELEASE' are
  not allowed.
experience:
  - versioning
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-version-semantic-and-stable/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-version-semantic-and-stable' (Info Version Semantic And
  Stable). Requirement: The API contract MUST have a stable version and MUST
  follow semantic versioning (e.g., '1.0.0'). Words like 'SNAPSHOT' or 'RELEASE'
  are not allowed. To fix: Ensure the targeted value matches the regular
  expression
  `^(?!.*\\b(SNAPSHOT|RELEASE)\\b)(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\
  $`; rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.info.version` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
