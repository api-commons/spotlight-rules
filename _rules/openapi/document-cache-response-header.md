---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-cache-response-header
title: Document Cache Response Header
severity: info
given: $.[responses][?(@property[0] == "2"
  )][headers].[?(@property.match(/Cache-Control|Expires/i))]]
message: Cache usage in responses SHOULD be documented in Cache-Control and/or
  Expires. {{error}}
description: "Cache usage SHOULD be extensively detailed in the `description`
  property to avoid data leaks or the usage of stale data. This rule should
  ensure in some way that the api provider documented extensively the cache
  usage to avoid data leaks or usage of stale data. For now this ruleset tests:
  * the presence of following keywords in the `description`: `max-age`,
  `private`, `no-store`, `no-cache`. * that one and only one between Expires and
  Cache-Control is used. `Cache-Control` and `Expires` should not be used in
  conjuction, because `Cache-Control` overrides `Expires` when `max-age` is set.
  Instead if neither `Cache-Control` or `Expires` are set, clients MAY use
  euristic cache like described in RFC7234."
experience:
  - documentation
  - reliability
  - performance
spec:
  - responses
  - headers
topic:
  - caching
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-cache-response-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-cache-response-header' (Document Cache Response
  Header). Requirement: Cache usage SHOULD be extensively detailed in the
  `description` property to avoid data leaks or the usage of stale data. This
  rule should ensure in some way that the api provider documented extensively
  the cache usage to avoid data leaks or usage of stale data. For now this
  ruleset tests: * the presence of following keywords in the `description`:
  `max-age`, `private`, `no-store`, `no-cache`. * that one and only one between
  Expires and Cache-Control is used. `Cache-Control` and `Expires` should not be
  used in conjuction, because `Cache-Control` overrides `Expires` when `max-age`
  is set. Instead if neither `Cache-Control` or `Expires` are set, clients MAY
  use euristic cache like described in RFC7234. To fix: Ensure `description` is
  present and non-empty at each matching location. Also: Ensure `description`
  matches the regular expression `.*(max-age|private|no-store|no-cache).*`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.[responses][?(@property[0] == \"2\"
  )][headers].[?(@property.match(/Cache-Control|Expires/i))]]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
