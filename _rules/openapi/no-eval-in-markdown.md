---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-eval-in-markdown
title: No Eval In Markdown
severity: warn
given: $..[description,title]
message: ""
description: Markdown descriptions must not have "eval(".
experience:
  - security
spec:
  - document
source: []
builtin: true
---
