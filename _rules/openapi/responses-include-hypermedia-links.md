---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: responses-include-hypermedia-links
title: Responses Include Hypermedia Links
severity: hint
given: $.paths[*][*].responses[*]
message: "{{description}}: {{error}}"
description: "The API contract MAY include hypermedia links to represent the
  state of resources and be navigable. It requires the `links` field to be
  present and non-empty (evaluated at `$.paths[*][*].responses[*]`). Severity:
  hint."
experience:
  - discoverability
  - usability
spec:
  - paths
  - responses
source:
  - adidas
builtin: false
---
