---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-no-eval-tag
title: Info Description No Eval Tag
severity: error
given: $.info
message: Info Description MUST NOT Have Eval Tag
description: "Eval functions MUST not be included in the description of an API,
  keeping descriptions to just the text that is needed, and relying on the rest
  of the OpenAPI to describe what is possible. It requires the `description`
  field not to match `^\\b(<eval)\\b` (evaluated at `$.info`). Severity: error."
experience:
  - security
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
