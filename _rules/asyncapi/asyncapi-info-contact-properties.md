---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-info-contact-properties
title: Asyncapi Info Contact Properties
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
reference: https://spotlight-rules.com/spec/rules/asyncapi/asyncapi-info-contact-properties/
prompt: "You are editing an AsyncAPI document to satisfy the Spotlight API
  governance rule 'asyncapi-info-contact-properties' (Asyncapi Info Contact
  Properties). Requirement: Contact object must have \"name\", \"url\" and
  \"email\". To fix: Ensure `name` is present and non-empty at each matching
  location. Also: Ensure `url` is present and non-empty at each matching
  location. Also: Ensure `email` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath `$.info.contact` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  AsyncAPI. Return only the complete corrected document, with no commentary."
builtin: true
---
