---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: contact-require-email
title: Contact Require Email
severity: error
given: $.info.contact
message: Info MUST Have Contact Email
description: "Having a contact email address associated with the technical
  contract ensures that anyone who comes across the API has someone to email and
  get more information. It requires the `email` field to be present and
  non-empty (evaluated at `$.info.contact`). Severity: error."
experience:
  - discoverability
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
