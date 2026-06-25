---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-no-script-tags-in-markdown
title: Arazzo No Script Tags In Markdown
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
