---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-contact-2
title: Info Require Contact 2
severity: error
given: $.info
message: Info MUST Have Contact Object
description: "Having a contact object associated with the technical contract
  ensures that anyone who comes across the API has someone to contact and get
  more information. It requires the `contact` field to be present and non-empty
  (evaluated at `$.info`). Severity: error."
experience:
  - discoverability
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
