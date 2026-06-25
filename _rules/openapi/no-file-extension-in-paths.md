---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-file-extension-in-paths
title: No File Extension In Paths
severity: warn
given: $.paths.*~
message: A resource SHOULD NOT make use of an extension at any point in the path.
description: "A resource SHOULD NOT make use of an extension at any point in the
  path. It requires the targeted value not to match `\\.` (evaluated at
  `$.paths.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
