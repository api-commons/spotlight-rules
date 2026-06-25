---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-event-canvas
title: Include Event Canvas
severity: info
given: $.common.*
message: Has APIOps Cycles Event Canvas
description: This ensures that an API has had the APIOps Event Canvas applied to
  the API, requiring that the canvas is present in the repository and registered
  in the APIs.json index for the API, helping with discovery and governance.
experience:
  - governance
  - documentation
spec:
  - collection
source: []
builtin: false
---
