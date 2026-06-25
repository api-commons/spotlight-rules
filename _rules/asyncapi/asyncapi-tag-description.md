---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-tag-description
title: Asyncapi Tag Description
severity: warn
given: $.tags[*]
message: ""
description: Tag object must have "description".
experience:
  - documentation
  - discoverability
spec:
  - document
source: []
builtin: true
---
