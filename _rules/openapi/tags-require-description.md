---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: tags-require-description
title: Tags Require Description
severity: error
given: $.tags[*]
message: Tags MUST Have a Description
description: "Tags used as part of an OpenAPI should have descriptions,
  providing more of a narrative behind what a tag means when it is applied to an
  API. It requires the `description` field to be present and non-empty
  (evaluated at `$.tags[*]`). Severity: error."
experience:
  - documentation
  - discoverability
spec:
  - tags
source:
  - api-evangelist
builtin: false
---
