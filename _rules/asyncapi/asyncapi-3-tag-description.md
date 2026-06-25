---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-3-tag-description
title: Asyncapi 3 Tag Description
severity: warn
given: $.info.tags[*]
message: ""
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - info
source: []
builtin: true
---
