---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-max-length
title: Operation Summary Max Length
severity: warn
given: $.paths.*[get,post,patch,put,delete]
message: Operation Summary MUST Be Less Than 50 Characters
description: "Apply length constraints to the operation summary helps keep them
  consistent for publishing in documentation. It constrains the length of the
  `summary` field and at most 50 (evaluated at
  `$.paths.*[get,post,patch,put,delete]`). Severity: warn."
experience:
  - documentation
  - consistency
spec:
  - paths
  - operations
source:
  - api-evangelist
builtin: false
---
