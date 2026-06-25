---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-$ref-siblings
title: No $ref Siblings
severity: error
given: $..[?(@property === '$ref')]
message: "{{error}}"
description: Property must not be placed among $ref
experience:
  - reliability
  - consistency
spec:
  - document
source: []
builtin: true
---
