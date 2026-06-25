---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-segments-kebab-case-4
title: Path Segments Kebab Case 4
severity: error
given: $.paths
message: Path Segments MUST Use kebab-case
description: "API path segments should use kebab-case (lowercase with hyphens).
  Consistent path naming reduces confusion and improves developer experience
  across API consumers and documentation. It requires the targeted value to
  match the pattern `^(/[a-z0-9{}][a-z0-9\\-{}]*)*$` (evaluated at `$.paths`).
  Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
