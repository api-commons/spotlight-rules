---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: openapi-tags
title: Openapi Tags
severity: info
given: $
message: OpenAPI object must have non-empty "tags" array.
description: OpenAPI object must have non-empty "tags" array.
experience:
  - discoverability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/openapi-tags/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'openapi-tags' (Openapi Tags). Requirement: OpenAPI object
  must have non-empty \"tags\" array. To fix: Adjust `tags` so it conforms to
  the schema this rule requires. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
