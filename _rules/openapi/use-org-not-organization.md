---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-org-not-organization
title: Use Org Not Organization
severity: warn
given: $..properties.*~
message: ""
description: "Use abbreviations instead of long form names, i.e. organization
  SHOULD BE org. It requires the targeted value not to match
  `(^organization([A-Z]|$)|Organization([A-Z]|$))` (evaluated at
  `$..properties.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
