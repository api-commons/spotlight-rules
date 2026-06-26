---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-version-must-be-semver
title: Info Version Must Be Semver
severity: info
given: $.info.version
message: Specs should follow semantic versioning. {{value}} is not a valid version.
description: The API version field should follow [semantic
  versioning](https://semver.org/#semantic-versioning-specification-semver).
experience:
  - versioning
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-version-must-be-semver/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-version-must-be-semver' (Info Version Must Be Semver).
  Requirement: The API version field should follow [semantic
  versioning](https://semver.org/#semantic-versioning-specification-semver). To
  fix: Ensure the targeted value matches the regular expression
  `^[0-9]+.[0-9]+.[0-9]+(-[a-z0-9+.-]+)?`; rewrite any value that does not. This
  rule is evaluated at the JSONPath `$.info.version` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
