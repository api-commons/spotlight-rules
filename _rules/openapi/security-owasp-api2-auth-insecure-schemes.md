---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: security-owasp-api2-auth-insecure-schemes
title: Security OWASP API2 Auth Insecure Schemes
severity: info
given: $.components.securitySchemes[?(@ && @.type == 'http')].scheme
message: HTTP auth scheme is insecure (avoid negotiate / oauth1).
description: HTTP auth schemes should not use insecure mechanisms such as
  negotiate or oauth1 (OWASP API2). Prefer bearer with a vetted token.
experience:
  - security
spec:
  - components
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/security-owasp-api2-auth-insecure-schemes/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'security-owasp-api2-auth-insecure-schemes' (Security OWASP
  API2 Auth Insecure Schemes). Requirement: HTTP auth schemes should not use
  insecure mechanisms such as negotiate or oauth1 (OWASP API2). Prefer bearer
  with a vetted token. To fix: Ensure the targeted value does NOT match the
  regular expression `^(negotiate|oauth)$`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$.components.securitySchemes[?(@
  && @.type == 'http')].scheme` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
---
