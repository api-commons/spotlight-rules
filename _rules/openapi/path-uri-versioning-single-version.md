---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-uri-versioning-single-version
title: Path URI Versioning Single Version
severity: info
given: $.paths.*~
message: Path can contain correct URI versioning
description: CAN use correct URI versioning [115a].
experience:
  - versioning
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-uri-versioning-single-version/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-uri-versioning-single-version' (Path URI Versioning
  Single Version). Requirement: CAN use correct URI versioning [115a]. To fix:
  Ensure the targeted value matches the regular expression
  `^((?!.*\\/v\\d+(\\/.*)?\\/v\\d+)\\/.*)$`; rewrite any value that does not.
  This rule is evaluated at the JSONPath `$.paths.*~` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
