---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-environment-names-in-paths
title: No Environment Names In Paths
severity: error
given: $.paths.*~
message: API paths MUST NOT indicate environment names.
description: "API paths MUST NOT indicate environment names. It requires the
  targeted value not to match
  `/prod/|/preprod/|/dev/|/test/|/integration/|/stage/` (evaluated at
  `$.paths.*~`). Severity: error."
experience:
  - naming
  - governance
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
