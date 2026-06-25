---
layout: rule
artifact: asyncapi
artifact_label: AsyncAPI
slug: asyncapi-latest-version
title: Asyncapi Latest Version
severity: info
given: $.asyncapi
message: The latest version is not used. You should update to the "3.1.0" version.
description: Checking if the AsyncAPI document is using the latest version.
experience:
  - versioning
  - consistency
spec:
  - document
source: []
builtin: true
---
