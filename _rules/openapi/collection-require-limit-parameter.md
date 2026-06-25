---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: collection-require-limit-parameter
title: Collection Require Limit Parameter
severity: error
given: $.paths[*].get.parameters[*]
message: Collection GET MUST Have Limit Parameter
description: "GET operations returning collections should include a limit
  parameter for pagination. Analysis shows limit is the most common pagination
  parameter (116 of 773 specs), used in 24% of APIs with pagination. It
  validates the targeted value against a JSON Schema (evaluated at
  `$.paths[*].get.parameters[*]`). Severity: error."
experience:
  - pagination
  - usability
spec:
  - paths
  - operations
  - parameters
source:
  - api-evangelist
builtin: false
---
