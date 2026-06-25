---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-cache-control-parameter
title: Document Cache Control Parameter
severity: warn
given: $..[parameters][?(@.in == "header" && @.name.match(/Cache-Control/i))]
message: Cache usage SHOULD be documented when used.
description: 'Cache usage SHOULD be extensively detailed in the `description`
  property to avoid data leaks or the usage of stale data. This rule should
  ensure in some way that the api provider documented extensively the cache
  usage to avoid data leaks or usage of stale data. For now this ruleset tests:
  * the presence of following keywords in the `description`: `max-age`,
  `private`, `no-store`, `no-cache`. * that one and only one between Expires and
  Cache-Control is used. `Cache-Control` and `Expires` should not be used in
  conjuction, because `Cache-Control` overrides `Expires` when `max-age` is set.
  Instead if neither `Cache-Control` or `Expires` are set, clients MAY use
  euristic cache like described in RFC7234. It requires the `description` field
  to be present and non-empty, and requires the `description` field to match the
  pattern `.*(max-age|private|no-store|no-cache).*` (evaluated at
  `$..[parameters][?(@.in == "header" && @.name.match(/Cache-Control/i))]`).
  Severity: warn.'
experience:
  - documentation
  - reliability
spec:
  - parameters
  - headers
source:
  - team-digitale
builtin: false
---
