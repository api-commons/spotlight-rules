---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: paths-include-version
title: Paths Include Version
severity: error
given: $.paths[?(@property!='/<upload_url>')]~
message: "{{description}}; {{property}} incorrect"
description: "Path must include the version. It requires the targeted value to
  match the pattern `^(/v[12]/.*|/api/v[12]/.*)$` (evaluated at
  `$.paths[?(@property!='/<upload_url>')]~`). Severity: error."
experience:
  - versioning
  - consistency
spec:
  - paths
source:
  - digitalocean
builtin: false
---
