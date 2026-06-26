---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-segment-kebab-case
title: Path Segment Kebab Case
severity: info
given: $.paths[*]~
message: "{{property}} is not kebab-case: {{error}}"
description: All YAML/JSON paths MUST follow kebab-case.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-segment-kebab-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-segment-kebab-case' (Path Segment Kebab Case).
  Requirement: All YAML/JSON paths MUST follow kebab-case. To fix: Ensure the
  targeted value matches the regular expression
  `^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$`; rewrite any
  value that does not. This rule is evaluated at the JSONPath `$.paths[*]~` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
