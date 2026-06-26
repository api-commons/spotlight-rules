---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-summary
title: Info Require Summary
severity: info
given: $
message: "API MUST have an one-liner #/info/x-summary field containing a brief
  description."
description: "The `#/info/x-summary` can be used to specify a brief, one-liner
  description of your API: this is very useful for catalog purposes (eg. this
  can be shown as your API subtitle in catalogs and developer portals). In
  OAS3.1 you can use the standard `#/info/summary` field."
experience:
  - documentation
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-summary/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-summary' (Info Require Summary). Requirement:
  The `#/info/x-summary` can be used to specify a brief, one-liner description
  of your API: this is very useful for catalog purposes (eg. this can be shown
  as your API subtitle in catalogs and developer portals). In OAS3.1 you can use
  the standard `#/info/summary` field. To fix: Ensure `info.x-summary` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
