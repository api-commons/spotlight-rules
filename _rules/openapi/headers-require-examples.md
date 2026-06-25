---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: headers-require-examples
title: Headers Require Examples
severity: error
given: $..headers.*
message: "{{description}}; missing {{property}}"
description: "Headers must include examples. It applies a custom validation to
  the targeted value (evaluated at `$..headers.*`). Severity: error."
experience:
  - documentation
  - usability
spec:
  - headers
source:
  - digitalocean
builtin: false
---
