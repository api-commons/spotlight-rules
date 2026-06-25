---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: boolean-no-prefix
title: Boolean No Prefix
severity: warn
given: $..properties[?(@ && @.type == 'boolean')]~
message: ""
description: "Boolean properties SHOULD NOT use is, has, or another prefix. It
  requires the targeted value not to match
  `^(is|has|was|will|needs|uses|should|can)([A-Z]|$).*` (evaluated at
  `$..properties[?(@ && @.type == 'boolean')]~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
