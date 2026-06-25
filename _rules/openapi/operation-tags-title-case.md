---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-tags-title-case
title: Operation Tags Title Case
severity: error
given: $.paths.*[get,post,patch,put,delete].tags.*
message: Operation Tag Names MUST Have First Letter in Each Word Capitalized
description: "Having the first letter of each word applied as a tag to API
  operations helps keep a consistent layout when published via search,
  documentation, and other ways APIs are made available. It requires the
  targeted value to match the pattern `[A-Z]\\w*` (evaluated at
  `$.paths.*[get,post,patch,put,delete].tags.*`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - operations
  - tags
source:
  - api-evangelist
builtin: false
---
