---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: no-technology-leak-in-paths
title: No Technology Leak In Paths
severity: error
given: $.paths.*~
message: A resource MUST NOT leak or expose format or technology-specific
  information at any point in the path.
description: "A resource MUST NOT leak or expose format or technology-specific
  information at any point in the path. It requires the targeted value not to
  match `(.php|.asp|.jsp|.cgi|.psp|.json|.xml)` (evaluated at `$.paths.*~`).
  Severity: error."
experience:
  - security
  - naming
spec:
  - paths
source:
  - sps-commerce
builtin: false
---
