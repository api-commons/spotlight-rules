---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-status-health-check-path
title: Require Status Health Check Path
severity: error
given: $
message: The "/status" path used to health-check the API must be defined. {{error}}
description: "You must define a `/status` path that can be used to health-check
  the API. Using this path avoids the arbitrary usage of a server URL for
  health-check scope. The `/status` endpoint should return a
  `application/problem+json` response containing a successful status code if the
  service is working correctly. The service provider is free to define the
  implementation logic for this path. It requires the
  `paths./status.get.responses.200` field to be present and non-empty (evaluated
  at `$`). Severity: error."
experience:
  - reliability
  - discoverability
spec:
  - document
source:
  - team-digitale
builtin: false
---
