---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-operational-headers-in-spec
title: No Operational Headers In Spec
severity: warn
given: $.paths[*][*].responses[*].headers
message: ""
description: "Access-Control-*, Content-Type, and Accept Headers SHOULD NOT be
  specified explicitly in a spec as it an operational concern. It requires the
  targeted value not to match `^(Access-Control-.*|Content-Type|Accept)$`
  (evaluated at `$.paths[*][*].responses[*].headers`). Severity: warn."
experience:
  - consistency
  - governance
spec:
  - paths
  - responses
  - headers
source:
  - sps-commerce
builtin: false
---
