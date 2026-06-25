---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-no-pascal-case
title: Tag No Pascal Case
severity: warn
given: $.tags[*].name | $.paths[*][*].tags[*]
message: Tag names cannot use Pascal Case. Please rename {{value}}.
description: "Tag names cannot use Pascal Case. Please rename {{value}}. It
  requires the targeted value not to match `/[A-Z][a-z]+[A-Z][a-z]+$/g`
  (evaluated at `$.tags[*].name`, `$.paths[*][*].tags[*]`). Severity: warn."
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
