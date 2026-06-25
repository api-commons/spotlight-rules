---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-no-file-extensions
title: Paths No File Extensions
severity: error
given: $.paths
message: Paths MUST NOT Contain File Extensions
description: "API paths should not include file extensions like .json or .xml.
  Content negotiation should be handled through Accept headers rather than path
  suffixes. It requires the targeted value not to match
  `\\.(json|xml|html|yaml|yml|csv|pdf)$` (evaluated at `$.paths`). Severity:
  error."
experience:
  - naming
  - consistency
spec:
  - paths
source:
  - api-evangelist
builtin: false
---
