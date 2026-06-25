---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: query-parameters-camel-case
title: Query Parameters Camel Case
severity: error
given: $.paths.*.*.parameters[?(@ && @.in=='query')].name
message: Query parameter name has to be ASCII camelCase
description: "MUST query parameter names must be ASCII camelCase [130a]. It
  requires the targeted value to match the pattern
  `^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$` (evaluated at
  `$.paths.*.*.parameters[?(@ && @.in=='query')].name`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - parameters
source:
  - baloise
builtin: false
---
