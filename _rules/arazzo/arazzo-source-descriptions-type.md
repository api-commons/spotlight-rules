---
layout: rule
artifact: arazzo
artifact_label: Arazzo
slug: arazzo-source-descriptions-type
title: Arazzo Source Descriptions Type
severity: warn
given: $.sourceDescriptions[*]
message: ""
description: Source Description "type" should be present.
experience:
  - reliability
  - consistency
spec:
  - source-descriptions
source: []
builtin: true
---
