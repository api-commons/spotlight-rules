---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-summary-no-period
title: Operation Summary No Period
severity: error
given: $.paths[*][*].summary
message: Operation MUST Not Have a Period.
description: "Operation summaries should not have a period, keeping the primary
  summary for each API as consistent as possible for publishing in
  documentation. It requires the targeted value not to match `\\.$` (evaluated
  at `$.paths[*][*].summary`). Severity: error."
experience:
  - consistency
  - documentation
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
