---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: uri-versioning-single-version
title: URI Versioning Single Version
severity: error
given: $.paths.*~
message: Path can contain correct URI versioning
description: "CAN use correct URI versioning [115a]. It requires the targeted
  value to match the pattern `^((?!.*\\/v\\d+(\\/.*)?\\/v\\d+)\\/.*)$`
  (evaluated at `$.paths.*~`). Severity: error."
experience:
  - versioning
  - consistency
spec:
  - paths
source:
  - baloise
builtin: false
---
