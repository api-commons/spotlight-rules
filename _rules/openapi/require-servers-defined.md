---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-servers-defined
title: Require Servers Defined
severity: error
given: $
message: Servers MUST Be Defined
description: "Every OpenAPI should define at least one server URL. Analysis
  shows 97.2% of APIs define servers, providing consumers with the base URL
  needed to make requests. It requires the `servers` field to be present and
  non-empty (evaluated at `$`). Severity: error."
experience:
  - usability
  - discoverability
spec:
  - document
source:
  - api-evangelist
builtin: false
---
