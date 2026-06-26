---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tags
title: Asyncapi Tags
severity: info
given: $
message: AsyncAPI object must have non-empty "tags" array.
description: AsyncAPI object must have non-empty "tags" array.
experience:
  - discoverability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-tags/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-tags' (Asyncapi Tags). Requirement: AsyncAPI object
  must have non-empty \"tags\" array. To fix: Ensure `tags` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
