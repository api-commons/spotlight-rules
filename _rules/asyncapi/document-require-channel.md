---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: document-require-channel
title: Document Require Channel
severity: info
given: $
message: Missing `channels`.
description: asyncapi document should declare a `channels` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/asyncapi/document-require-channel/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'document-require-channel' (Document Require Channel).
  Requirement: asyncapi document should declare a `channels` property. To fix:
  Ensure `channels` is present and non-empty at each matching location.
  Guidance: Missing `channels`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid AsyncAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
