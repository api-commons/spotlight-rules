---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-no-verbs
title: Paths No Verbs
severity: warn
given: $.paths[*]~
message: Path '{{path}}' includes a verb (e.g., 'get', 'update', 'create',
  'delete'). API paths SHOULD be resource-focused.
description: "API paths MUST be resource-focused and MUST NOT include verbs like
  'get', 'update', 'create', or 'delete'. It requires the targeted value not to
  match `/\\b(get|update|create|delete|fetch|retrieve)\\b/` (evaluated at
  `$.paths[*]~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - adidas
builtin: false
---
