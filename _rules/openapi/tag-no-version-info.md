---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-no-version-info
title: Tag No Version Info
severity: warn
given: $.tags[*].name | $.paths[*][*].tags[*]
message: Tag names cannot have version information {{value}}. Consider
  versioning your API.
description: "Tag names cannot have version information {{value}}. Consider
  versioning your API. It requires the targeted value not to match
  `/(V|v)\\s?[0-9]+/g` (evaluated at `$.tags[*].name`, `$.paths[*][*].tags[*]`).
  Severity: warn."
experience:
  - naming
  - versioning
spec:
  - paths
  - tags
source:
  - trimble
builtin: false
---
