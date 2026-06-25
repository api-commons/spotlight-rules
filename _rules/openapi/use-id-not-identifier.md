---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-id-not-identifier
title: Use ID Not Identifier
severity: warn
given: $..properties.*~
message: ""
description: "Use abbreviations instead of long form names, i.e. identifier
  SHOULD BE id. It requires the targeted value not to match `^identifier$`
  (evaluated at `$..properties.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
