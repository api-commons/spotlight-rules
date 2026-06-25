---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tags-require-name
title: Tags Require Name
severity: error
given: $.tags[*]
message: Tags MUST Have a Name
description: "Tags used as part of an OpenAPI should have names, providing a
  simple key word or phrase that represents the tag being applied to APIs. It
  requires the `name` field to be present and non-empty (evaluated at
  `$.tags[*]`). Severity: error."
experience:
  - discoverability
  - naming
spec:
  - tags
source:
  - api-evangelist
builtin: false
---
