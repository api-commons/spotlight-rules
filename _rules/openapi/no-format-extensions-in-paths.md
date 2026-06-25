---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-format-extensions-in-paths
title: No Format Extensions In Paths
severity: error
given: $.paths.*~
message: ""
description: "Request and Response media type formats MUST NOT be implied using
  extensions on resources (i.e. .json or .xml). Instead, use the standard
  resource path with the appropriate Content-Type header. It requires the
  targeted value not to match `\\.json|\\.xml|\\.yml|\\.yaml` (evaluated at
  `$.paths.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
