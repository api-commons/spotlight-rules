---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-description-length-limit
title: Info Description Length Limit
severity: error
given: $.info
message: Info description MUST be less than 500 characters.
description: "Having a restriction on the length of the API description
  expressed as the OpenAPI info description helps provide constraints for
  consumers when adding a description, and keeps portals, landing pages,
  documentation, and discovery results more consistent. It constrains the length
  of the `description` field and at most 500 (evaluated at `$.info`). Severity:
  error."
experience:
  - documentation
  - consistency
spec:
  - info
source:
  - api-evangelist
builtin: false
---
