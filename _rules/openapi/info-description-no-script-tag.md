---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-no-script-tag
title: Info Description No Script Tag
severity: info
given: $.info
message: Info Description MUST NOT Have Script Tag
description: Script tags MUST not be included in the description of an API,
  keeping descriptions to just the text that is needed, and relying on the rest
  of the OpenAPI to describe what is possible.
experience:
  - security
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-description-no-script-tag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-description-no-script-tag' (Info Description No Script
  Tag). Requirement: Script tags MUST not be included in the description of an
  API, keeping descriptions to just the text that is needed, and relying on the
  rest of the OpenAPI to describe what is possible. To fix: Ensure `description`
  does NOT match the regular expression `^\\b(<script)\\b`; rename or rewrite
  any value that does. This rule is evaluated at the JSONPath `$.info` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
