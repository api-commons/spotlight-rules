---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-resources-plural
title: Path Resources Plural
severity: warn
given: $.paths
message: Path Resources Should Be Plural
description: "Resource names in paths should use plural nouns to maintain
  consistency and follow REST conventions for collection-oriented resource
  design. It requires the targeted value to match the pattern
  `^(/[a-z].*s(/\\{[^}]+\\})?)*$` (evaluated at `$.paths`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
