---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: contact-require-url
title: Contact Require URL
severity: error
given: $.info.contact
message: Info MUST Have Contact URL
description: "Having a contact url associated with the technical contract
  ensures that anyone who comes across the API knows where to go to contact
  someone. It requires the `url` field to be present and non-empty (evaluated at
  `$.info.contact`). Severity: error."
experience:
  - discoverability
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
