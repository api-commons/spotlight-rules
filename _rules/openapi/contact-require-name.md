---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: contact-require-name
title: Contact Require Name
severity: error
given: $.info.contact
message: Info MUST Have Contact Name
description: "Having a contact name associated with the technical contract
  ensures that anyone who comes across the API knows who to contact. It requires
  the `name` field to be present and non-empty (evaluated at `$.info.contact`).
  Severity: error."
experience:
  - discoverability
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
