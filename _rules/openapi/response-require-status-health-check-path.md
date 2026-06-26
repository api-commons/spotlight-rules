---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-require-status-health-check-path
title: Response Require Status Health Check Path
severity: info
given: $
message: The "/status" path used to health-check the API must be defined. {{error}}
description: You must define a `/status` path that can be used to health-check
  the API. Using this path avoids the arbitrary usage of a server URL for
  health-check scope. The `/status` endpoint should return a
  `application/problem+json` response containing a successful status code if the
  service is working correctly. The service provider is free to define the
  implementation logic for this path.
experience:
  - reliability
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-require-status-health-check-path/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-require-status-health-check-path' (Response Require
  Status Health Check Path). Requirement: You must define a `/status` path that
  can be used to health-check the API. Using this path avoids the arbitrary
  usage of a server URL for health-check scope. The `/status` endpoint should
  return a `application/problem+json` response containing a successful status
  code if the service is working correctly. The service provider is free to
  define the implementation logic for this path. To fix: Ensure
  `paths./status.get.responses.200` is present and non-empty at each matching
  location. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
