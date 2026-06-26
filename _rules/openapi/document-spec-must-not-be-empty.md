---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-spec-must-not-be-empty
title: Document Spec Must Not Be Empty
severity: info
given: $
message: "{{error}}"
description: Spec should not be empty.
experience:
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-spec-must-not-be-empty/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-spec-must-not-be-empty' (Document Spec Must Not Be
  Empty). Requirement: Spec should not be empty. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
