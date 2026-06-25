---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: header-names-hyphenated-pascal-case
title: Header Names Hyphenated Pascal Case
severity: error
given: $..parameters[?(@.in == 'header')].name
message: "'HTTP' headers MUST follow 'Hyphenated-Pascal-Case' notation"
description: "All `HTTP` headers MUST use `Hyphenated-Pascal-Case` notation. It
  requires the targeted value to match the pattern
  `/^([A-Z][a-z0-9]-)*([A-Z][a-z0-9])+/` (evaluated at `$..parameters[?(@.in ==
  'header')].name`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - parameters
  - headers
source:
  - adidas
  - sps-commerce
builtin: false
---
