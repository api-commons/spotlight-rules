---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-external-docs
title: Require External Docs
severity: error
given: $
message: External Docs MUST Be Defined
description: "Defining external documentation provides a link to detailed API
  guides, tutorials, and reference material beyond the OpenAPI spec. Analysis
  shows 57.1% of APIs include external docs. It requires the `externalDocs`
  field to be present and non-empty (evaluated at `$`). Severity: error."
experience:
  - documentation
  - discoverability
spec:
  - document
source:
  - api-evangelist
builtin: false
---
