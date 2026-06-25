---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-require-audience
title: Info Require Audience
severity: error
given: $.info
message: Missing or wrong `info.x-audience`.
description: "MUST provide API audience [219]. It requires the `x-audience`
  field to be present and non-empty, and requires the `x-audience` field to
  match the pattern
  `^(team-internal|domain-internal|company-internal|external-partner|external-p\
  ublic)$` (evaluated at `$.info`). Severity: error."
experience:
  - governance
  - discoverability
spec:
  - info
source:
  - baloise
builtin: false
---
