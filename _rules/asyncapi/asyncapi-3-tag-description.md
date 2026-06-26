---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tag-description
title: Asyncapi 3 Tag Description
severity: info
given: $.info.tags[*]
message: Tag object must have "description".
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-3-tag-description/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-3-tag-description' (Asyncapi 3 Tag Description).
  Requirement: Tag object must have \"description\". To fix: Ensure
  `description` is present and non-empty at each matching location. This rule is
  evaluated at the JSONPath `$.info.tags[*]` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid AsyncAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
