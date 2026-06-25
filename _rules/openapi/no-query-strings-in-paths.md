---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-query-strings-in-paths
title: No Query Strings In Paths
severity: warn
given: $.paths.*~
message: Paths SHOULD NOT have query parameters in them. They should be defined
  separately in the OpenAPI.
description: "Paths SHOULD NOT have query parameters in them. They should be
  defined separately in the OpenAPI. It requires the targeted value not to match
  `\\?` (evaluated at `$.paths.*~`). Severity: warn."
experience:
  - consistency
  - naming
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
