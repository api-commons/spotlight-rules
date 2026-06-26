---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-api-identifier
title: Info Require API Identifier
severity: info
given: $
message: "API must have an unique identifier in x-api-id in #/info/x-api-id."
description: The `#/info/x-api-id` field can be used to associate an identifier
  to an API. This is useful to track an API even when its `#/info/title`
  changes.
experience:
  - discoverability
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-api-identifier/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-api-identifier' (Info Require API Identifier).
  Requirement: The `#/info/x-api-id` field can be used to associate an
  identifier to an API. This is useful to track an API even when its
  `#/info/title` changes. To fix: Ensure `info.x-api-id` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
