---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: success-response-require-description
title: Success Response Require Description
severity: warn
given: $.paths.*.
message: "{{error}}"
description: "Check if the response description is appropriate for all requests.
  It applies a custom validation to the targeted value (evaluated at
  `$.paths.*.`). Severity: warn."
experience:
  - documentation
spec:
  - paths
source:
  - trimble
builtin: false
---
