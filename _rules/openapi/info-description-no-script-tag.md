---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-no-script-tag
title: Info Description No Script Tag
severity: error
given: $.info
message: Info Description MUST NOT Have Script Tag
description: "Script tags MUST not be included in the description of an API,
  keeping descriptions to just the text that is needed, and relying on the rest
  of the OpenAPI to describe what is possible. It requires the `description`
  field not to match `^\\b(<script)\\b` (evaluated at `$.info`). Severity:
  error."
experience:
  - security
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
