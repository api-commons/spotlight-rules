---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-path-parameters
title: Limit Path Parameters
severity: warn
given: $.paths.*~
message: The URL path should not contain more than 3 dynamic path parameters.
description: "The URL path should not contain more than 3 dynamic path
  parameters. It requires the targeted value not to match `^(.*{{1}.*){4,}`
  (evaluated at `$.paths.*~`). Severity: warn."
experience:
  - usability
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
