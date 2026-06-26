---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-require-server-defined
title: Document Require Server Defined
severity: info
given: $
message: Servers MUST Be Defined
description: Every OpenAPI should define at least one server URL. Analysis shows
  97.2% of APIs define servers, providing consumers with the base URL needed to
  make requests.
experience:
  - usability
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-require-server-defined/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-require-server-defined' (Document Require Server
  Defined). Requirement: Every OpenAPI should define at least one server URL.
  Analysis shows 97.2% of APIs define servers, providing consumers with the base
  URL needed to make requests. To fix: Ensure `servers` is present and non-empty
  at each matching location. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
