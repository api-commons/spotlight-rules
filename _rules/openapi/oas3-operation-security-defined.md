---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-operation-security-defined
title: Operation Security Defined
severity: warn
given: "#SecurityRequirementObject"
message: "{{error}}"
description: Operation "security" values must match a scheme defined in the
  "components.securitySchemes" object.
experience:
  - security
  - reliability
spec:
  - security
source: []
builtin: true
---
