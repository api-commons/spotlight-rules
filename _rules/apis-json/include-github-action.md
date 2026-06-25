---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: include-github-action
title: Include Github Action
severity: info
given: $.apis.*.properties.* | $.common.*
message: Has a GitHub Action
description: This property ensures that a GitHub Actions CI/CD pipeline is
  available for an API, providing a link to the pipeline YAML artifact, which
  can be used to automate and govern the API as part of the build process
experience:
  - governance
  - reliability
spec:
  - apis
  - properties
source: []
builtin: false
---
