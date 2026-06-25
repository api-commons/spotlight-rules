---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-script-tags-in-markdown
title: No Script Tags In Markdown
severity: warn
given: $..[description,title]
message: ""
description: Markdown descriptions must not have "<script>" tags.
experience:
  - security
spec:
  - document
source: []
builtin: true
---
