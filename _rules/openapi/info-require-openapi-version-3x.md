---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-openapi-version-3x
title: Info Require Openapi Version 3x
severity: info
given: $
message: OpenAPI MUST Be Version 3.x
description: APIs should use OpenAPI 3.x specification. Analysis of 773 API
  specs shows 97% use OpenAPI 3.x, with 86% on 3.1.0, making it the dominant
  standard for modern API definitions.
experience:
  - versioning
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-require-openapi-version-3x/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-require-openapi-version-3x' (Info Require Openapi
  Version 3x). Requirement: APIs should use OpenAPI 3.x specification. Analysis
  of 773 API specs shows 97% use OpenAPI 3.x, with 86% on 3.1.0, making it the
  dominant standard for modern API definitions. To fix: Ensure `openapi` matches
  the regular expression `^3\\.`; rewrite any value that does not. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
