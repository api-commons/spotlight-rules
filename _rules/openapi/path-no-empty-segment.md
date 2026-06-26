---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-empty-segment
title: Path No Empty Segment
severity: info
given: $.paths.*~
message: A resource MUST use normalized paths without empty path segments.
description: A resource MUST use normalized paths without empty path segments.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-empty-segment/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-empty-segment' (Path No Empty Segment). Requirement:
  A resource MUST use normalized paths without empty path segments. To fix:
  Ensure the targeted value does NOT match the regular expression `//`; rename
  or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths.*~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
