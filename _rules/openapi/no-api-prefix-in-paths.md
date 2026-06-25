---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-api-prefix-in-paths
title: No API Prefix In Paths
severity: error
given: $.paths.*~
message: A resource SHOULD NOT contain 'api' as a prefix in or a part of the path.
description: "A resource SHOULD NOT contain 'api' as a prefix in or a part of
  the path. It requires the targeted value not to match `/api|/api/|-api/`
  (evaluated at `$.paths.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
