---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-no-camel-case
title: Tag No Camel Case
severity: info
given: $.tags[*].name | $.paths[*][*].tags[*]
message: Tag names cannot use Camel Case. Please rename {{value}}.
description: Detects a tag with camelCase (personalItem) text within it.
experience:
  - naming
  - consistency
spec:
  - paths
  - tags
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/tag-no-camel-case/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'tag-no-camel-case' (Tag No Camel Case). Requirement: Detects
  a tag with camelCase (personalItem) text within it. To fix: Ensure the
  targeted value does NOT match the regular expression `/^[a-z]+[A-Z][a-z]+$/g`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.tags[*].name | $.paths[*][*].tags[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
