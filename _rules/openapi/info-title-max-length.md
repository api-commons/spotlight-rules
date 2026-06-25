---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-title-max-length
title: Info Title Max Length
severity: error
given: $.info
message: Info Title MUST Be Less Than 50 Characters
description: "Having a limitation on the length of the title for your API helps
  provide constraints for teams naming it, but also keep consistent with other
  APIs from across teams. It constrains the length of the `title` field and at
  most 50 (evaluated at `$.info`). Severity: error."
experience:
  - consistency
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
