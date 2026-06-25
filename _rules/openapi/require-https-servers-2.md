---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: require-https-servers-2
title: Require HTTPS Servers 2
severity: error
given: $.servers[?(@["x-sandbox"] != true)] | $.paths..servers[?(@["x-sandbox"]
  != true)]
message: "Non-sandbox url  {{value}} {{error}}. Add `x-sandbox: true` to skip
  this check on a specific server."
description: 'Servers must use https to ensure the origin of the responses and
  protect the integrity and the confidentiality of the communication. You can
  use `http://` only on sandboxes environment. Use `x-sandbox: true` to skip
  this kind of check. It requires the `url` field to match the pattern
  `^https://.*` (evaluated at `$.servers[?(@["x-sandbox"] != true)]`,
  `$.paths..servers[?(@["x-sandbox"] != true)]`). Severity: error.'
experience:
  - security
spec:
  - servers
  - paths
source:
  - team-digitale
builtin: false
---
