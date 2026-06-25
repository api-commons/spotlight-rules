---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: head-must-not-have-request-body
title: Head Must Not Have Request Body
severity: error
given: $.paths[*][head].requestBody
message: ""
description: "A `HEAD` request MUST NOT accept a request body. It requires the
  targeted value to be undefined (evaluated at `$.paths[*][head].requestBody`).
  Severity: error."
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
