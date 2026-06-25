---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-description-max-length
title: Operation Description Max Length
severity: warn
given: $.paths.*[get,post,patch,put,delete]
message: Operation Description MUST Be Less Than 250 Characters
description: "Having a length limitation for each description of each API
  operation helps apply constraints to how you describe your APIs, while helping
  drive consistency across APIs when it comes to search, documentation, and
  other ways an API is made available. It constrains the length of the
  `description` field and at most 250 (evaluated at
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
