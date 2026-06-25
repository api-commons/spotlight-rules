---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-domain-canvas
title: Include Domain Canvas
severity: info
given: $.common.*
message: Has APIOps Cycles Domain Canvas
description: This ensures that an API has had the APIOps Domain Canvas applied
  to the API, requiring that the canvas is present in the repository and
  registered in the APIs.json index for the API, helping with discovery and
  governance.
experience:
  - governance
  - documentation
spec:
  - collection
source: []
builtin: false
---
