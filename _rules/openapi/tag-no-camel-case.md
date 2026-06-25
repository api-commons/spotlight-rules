---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-no-camel-case
title: Tag No Camel Case
severity: warn
given: $.tags[*].name | $.paths[*][*].tags[*]
message: Tag names cannot use Camel Case. Please rename {{value}}.
description: "Detects a tag with camelCase (personalItem) text within it. It
  requires the targeted value not to match `/^[a-z]+[A-Z][a-z]+$/g` (evaluated
  at `$.tags[*].name`, `$.paths[*][*].tags[*]`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
  - tags
source:
  - trimble
builtin: false
---
