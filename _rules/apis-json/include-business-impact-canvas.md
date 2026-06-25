---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-business-impact-canvas
title: Include Business Impact Canvas
severity: info
given: $.common.*
message: Has APIOps Cycles Business Impact Canvas
description: This ensures that an API has had the APIOps Business Impact Canvas
  applied to the API, requiring that the canvas is present in the repository and
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
