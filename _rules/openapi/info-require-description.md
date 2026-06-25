---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-description
title: Info Require Description
severity: error
given: $.info
message: ""
description: "Info section is missing a description. It requires the
  `description` field to be present and non-empty (evaluated at `$.info`).
  Severity: error."
experience:
  - documentation
spec:
  - info
source:
  - paystack
  - api-evangelist
builtin: false
---
