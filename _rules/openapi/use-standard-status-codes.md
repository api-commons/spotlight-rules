---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: use-standard-status-codes
title: Use Standard Status Codes
severity: error
given: $.paths.*.*.responses.*~
message: "{{property}} is not a standardized response code"
description: 'MUST use standard HTTP status codes [150a]. It requires the
  targeted value to be one of
  ["100","101","200","201","202","203","204","205","206","207","300","301","302","303","304","305","307","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","422","423","426","428","429","431","500","501","502","503","504","505","511","default"]
  (evaluated at `$.paths.*.*.responses.*~`). Severity: error.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
source:
  - baloise
builtin: false
---
