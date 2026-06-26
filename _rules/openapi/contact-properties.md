---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: contact-properties
title: Contact Properties
severity: info
given: $.info.contact
message: Contact object must have "name", "url" and "email".
description: Contact object must have "name", "url" and "email".
experience:
  - documentation
  - discoverability
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/contact-properties/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'contact-properties' (Contact Properties). Requirement:
  Contact object must have \"name\", \"url\" and \"email\". To fix: Ensure
  `name` is present and non-empty at each matching location. Also: Ensure `url`
  is present and non-empty at each matching location. Also: Ensure `email` is
  present and non-empty at each matching location. This rule is evaluated at the
  JSONPath `$.info.contact` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: true
---
