---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-require-query-parameter
title: Path Require Query Parameter
severity: info
given: $.paths
message: "{{error}}"
description: Check if the given resource path has queryparameter.
experience:
  - usability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-require-query-parameter/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-require-query-parameter' (Path Require Query Parameter).
  Requirement: Check if the given resource path has queryparameter. This rule is
  evaluated at the JSONPath `$.paths` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
