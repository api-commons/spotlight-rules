---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: options-must-not-have-request-body
title: Options Must Not Have Request Body
severity: error
given: $.paths[*][options].requestBody
message: ""
description: "An `OPTIONS` request MUST NOT accept a request body. It requires
  the targeted value to be undefined (evaluated at
  `$.paths[*][options].requestBody`). Severity: error."
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
source:
  - sps-commerce
builtin: false
---
