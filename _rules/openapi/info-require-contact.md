---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-contact
title: Info Require Contact
severity: error
given: $
message: ""
description: "API MUST reference a contact, either url or email in
  #/info/contact. It requires the `info.contact` field to be present and
  non-empty (evaluated at `$`). Severity: error."
experience:
  - documentation
  - discoverability
spec:
  - document
source:
  - team-digitale
builtin: false
---
