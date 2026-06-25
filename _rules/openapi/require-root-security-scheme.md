---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-root-security-scheme
title: Require Root Security Scheme
severity: error
given: $
message: ""
description: "Security field MUST be present at the root of the spec with at
  least one item (ie. HTTPBearer, Token, APIKey, etc.). It validates the
  `security` field against a JSON Schema (evaluated at `$`). Severity: error."
experience:
  - security
  - governance
spec:
  - document
source:
  - sps-commerce
builtin: false
---
