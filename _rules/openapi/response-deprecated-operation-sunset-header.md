---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-deprecated-operation-sunset-header
title: Response Deprecated Operation Sunset Header
severity: info
given: $.paths[*][?(@ && @.deprecated == true)].responses[*].headers
message: Deprecated operation should document a Sunset header.
description: Deprecated operations should document a Sunset response header (RFC
  8594) telling clients when the operation will be removed.
experience:
  - versioning
  - governance
spec:
  - responses
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-deprecated-operation-sunset-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-deprecated-operation-sunset-header' (Response
  Deprecated Operation Sunset Header). Requirement: Deprecated operations should
  document a Sunset response header (RFC 8594) telling clients when the
  operation will be removed. To fix: Ensure `Sunset` is present and non-empty at
  each matching location. This rule is evaluated at the JSONPath `$.paths[*][?(@
  && @.deprecated == true)].responses[*].headers` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
