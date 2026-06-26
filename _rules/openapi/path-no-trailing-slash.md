---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-trailing-slash
title: Path No Trailing Slash
severity: info
given: $.paths
message: Path must not end with a slash.
description: Path must not end with a slash.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-trailing-slash/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-trailing-slash' (Path No Trailing Slash).
  Requirement: Path must not end with a slash. To fix: Ensure the targeted value
  does NOT match the regular expression `.+\\/$`; rename or rewrite any value
  that does. This rule is evaluated at the JSONPath `$.paths` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
