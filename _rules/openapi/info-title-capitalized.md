---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-title-capitalized
title: Info Title Capitalized
severity: error
given: $.info.title
message: Info Title Has First Characters Capitalized
description: "Having a consistent casing for the title for your API helps
  provide constraints for teams naming the API, but also keep consistent with
  other APIs from across teams. It requires the targeted value to match the
  pattern `[A-Z]\\w*` (evaluated at `$.info.title`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - info
source:
  - api-evangelist
builtin: false
---
