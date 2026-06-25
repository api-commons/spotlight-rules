---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-standard-status-codes-2
title: Use Standard Status Codes 2
severity: error
given: $.paths...responses.*~
message: ""
description: 'An API MUST return HTTP response codes in conformance with
  RFC-2616 and common usage. It requires the targeted value to be one of
  ["200","201","202","204","400","401","403","404","405","406","409","412","415","428","429","500"]
  (evaluated at `$.paths...responses.*~`). Severity: error.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
source:
  - sps-commerce
builtin: false
---
