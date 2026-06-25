---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-http-methods-in-paths
title: No HTTP Methods In Paths
severity: error
given: $.paths.*~
message: A resource SHOULD NOT contain HTTP methods.
description: "A resource SHOULD NOT contain HTTP methods. It requires the
  targeted value not to match `(\\/get|\\/post|\\/put|\\/delete|\\/patch)`
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
