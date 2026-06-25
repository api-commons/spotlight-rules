---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: spec-must-not-be-empty
title: Spec Must Not Be Empty
severity: error
given: $
message: "{{error}}"
description: "Spec should not be empty. It applies a custom validation to the
  targeted value (evaluated at `$`). Severity: error."
experience:
  - governance
spec:
  - document
source:
  - trimble
builtin: false
---
