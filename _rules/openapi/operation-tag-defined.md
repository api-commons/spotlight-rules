---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-tag-defined
title: Operation Tag Defined
severity: info
given: $
message: Operation tags must be defined in global tags.
description: Operation tags must be defined in global tags.
experience:
  - discoverability
  - consistency
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-tag-defined/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-tag-defined' (Operation Tag Defined). Requirement:
  Operation tags must be defined in global tags. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
---
