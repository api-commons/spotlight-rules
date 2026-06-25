---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: server-require-description
title: Server Require Description
severity: error
given: $.servers[*] | $.paths..servers
message: Server {{path}} must have a description.
description: "Servers must have a description. It requires the `description`
  field to be present and non-empty (evaluated at `$.servers[*]`,
  `$.paths..servers`). Severity: error."
experience:
  - documentation
spec:
  - servers
  - paths
source:
  - team-digitale
builtin: false
---
