---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: custom-header-naming-format
title: Custom Header Naming Format
severity: error
given: $.paths[*][*].responses[*].headers.*~
message: ""
description: "Custom headers MUST NOT be longer than 50 chars, and MUST only
  contain alphanumeric and dash chars, and MUST begin with Sps- not X-. It
  requires the targeted value to match the pattern
  `^(Sps-[a-zA-Z0-9-]{1,50}|Accept|Access-Control.*|Authorization|Cache-Control\
  |Content-Disposition|Content-Language|Content-Length|Content-Type|Date|ETag|H\
  ost|If-Match|If-None-Match|Location|Origin|User-Agent)$` (evaluated at
  `$.paths[*][*].responses[*].headers.*~`). Severity: error."
experience:
  - naming
  - consistency
spec:
  - paths
  - responses
  - headers
source:
  - sps-commerce
builtin: false
---
