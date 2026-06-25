---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-fingerprint-not-hash
title: Use Fingerprint Not Hash
severity: error
given: $.components.schemas..properties.*~
message: "{{property}} is not using property name fingerprint."
description: "Rather than property names refering to the implementation for
  'hash' or 'hashkey', you MUST use the property name 'fingerprint'. It requires
  the targeted value not to match `^hashkey|hashKey|hash$` (evaluated at
  `$.components.schemas..properties.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - schemas
  - components
source:
  - sps-commerce
builtin: false
---
