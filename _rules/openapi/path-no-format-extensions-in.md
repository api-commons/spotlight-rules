---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-format-extensions-in
title: Path No Format Extensions In
severity: info
given: $.paths.*~
message: Request and Response media type formats MUST NOT be implied using
  extensions on resources (i.e.
description: Request and Response media type formats MUST NOT be implied using
  extensions on resources (i.e. .json or .xml). Instead, use the standard
  resource path with the appropriate Content-Type header.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-format-extensions-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-format-extensions-in' (Path No Format Extensions In).
  Requirement: Request and Response media type formats MUST NOT be implied using
  extensions on resources (i.e. .json or .xml). Instead, use the standard
  resource path with the appropriate Content-Type header. To fix: Ensure the
  targeted value does NOT match the regular expression
  `\\.json|\\.xml|\\.yml|\\.yaml`; rename or rewrite any value that does. This
  rule is evaluated at the JSONPath `$.paths.*~` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
