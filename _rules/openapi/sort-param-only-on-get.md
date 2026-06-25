---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: sort-param-only-on-get
title: Sort Param Only On Get
severity: error
given: $.paths.*[?(@property!='get')].parameters.[?(@.in=='query')]
message: ""
description: "Non-GET endpoints MUST NOT have sorting query parameters.
  Parameter names such as sort, sorting, orderBy, etc. It requires the `name`
  field not to match `^sort|sorting|sortBy|order|ordering|orderBy$` (evaluated
  at `$.paths.*[?(@property!='get')].parameters.[?(@.in=='query')]`). Severity:
  error."
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
source:
  - sps-commerce
builtin: false
---
