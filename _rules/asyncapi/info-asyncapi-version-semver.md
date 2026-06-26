---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: info-asyncapi-version-semver
title: Info Asyncapi Version Semver
severity: info
given: $.info.version
message: AsyncAPI version should be semantic.
description: info.version should be semantic (e.g. 1.0.0).
experience:
  - versioning
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/info-asyncapi-version-semver/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'info-asyncapi-version-semver' (Info Asyncapi Version Semver).
  Requirement: info.version should be semantic (e.g. 1.0.0). To fix: Ensure the
  targeted value matches the regular expression `^\\d+\\.\\d+\\.\\d+`; rewrite
  any value that does not. This rule is evaluated at the JSONPath
  `$.info.version` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid AsyncAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
