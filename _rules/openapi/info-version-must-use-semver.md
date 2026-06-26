---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-version-must-use-semver
title: Info Version Must Use Semver
severity: info
given: $.info.version
message: Version should use semantic versioning. {{value}} is not a valid version.
description: Version should use semantic versioning. {{value}} is not a valid version.
experience:
  - versioning
  - consistency
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-version-must-use-semver/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-version-must-use-semver' (Info Version Must Use Semver).
  Requirement: Version should use semantic versioning. {{value}} is not a valid
  version. To fix: Ensure the targeted value matches the regular expression
  `^([0-9]+.[0-9]+.[0-9]+)$`; rewrite any value that does not. This rule is
  evaluated at the JSONPath `$.info.version` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
