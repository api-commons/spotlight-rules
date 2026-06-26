---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-terms-of-service
title: Info Require Terms Of Service
severity: info
given: $
message: "API MUST reference the URL of the Terms of Service  in #/info/termsOfService."
description: API MUST reference the URL of the Terms of Service in `#/info/termsOfService`.
experience:
  - documentation
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-terms-of-service/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-terms-of-service' (Info Require Terms Of
  Service). Requirement: API MUST reference the URL of the Terms of Service in
  `#/info/termsOfService`. To fix: Ensure `info.termsOfService` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
---
