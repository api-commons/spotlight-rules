---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-schema
title: Asyncapi Schema
severity: info
given: $
message: "{{error}}"
description: Validate structure of AsyncAPI specification.
experience:
  - data-modeling
  - reliability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-schema/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-schema' (Asyncapi Schema). Requirement: Validate
  structure of AsyncAPI specification. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: true
---
