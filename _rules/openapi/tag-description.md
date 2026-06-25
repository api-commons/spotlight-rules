---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tag-description
title: Tag Description
severity: warn
given: $.tags[*]
message: ""
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - tags
source: []
builtin: true
---
