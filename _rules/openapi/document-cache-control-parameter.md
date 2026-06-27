---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-cache-control-parameter
title: Document Cache Control Parameter
severity: info
given: $..[parameters][?(@.in == "header" && @.name.match(/Cache-Control/i))]
message: Cache usage SHOULD be documented when used.
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
  - parameters
  - headers
topic:
  - caching
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/document-cache-control-parameter/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-cache-control-parameter' (Document Cache Control
  Parameter). Requirement: Cache usage SHOULD be extensively detailed in the
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
  `$..[parameters][?(@.in == \"header\" && @.name.match(/Cache-Control/i))]` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-cache-control-parameter:
    title: Document Cache Control Parameter
    reference: https://spotlight-rules.com/spec/rules/openapi/document-cache-control-parameter/
    description: "Cache usage SHOULD be extensively detailed in the `description`
      property to avoid data leaks or the usage of stale data. This rule should
      ensure in some way that the api provider documented extensively the cache
      usage to avoid data leaks or usage of stale data. For now this ruleset
      tests: * the presence of following keywords in the `description`: `max-age`,
      `private`, `no-store`, `no-cache`. * that one and only one between Expires
      and Cache-Control is used. `Cache-Control` and `Expires` should not be used
      in conjuction, because `Cache-Control` overrides `Expires` when `max-age` is
      set. Instead if neither `Cache-Control` or `Expires` are set, clients MAY
      use euristic cache like described in RFC7234."
    message: Cache usage SHOULD be documented when used.
    severity: info
    given: $..[parameters][?(@.in == "header" && @.name.match(/Cache-Control/i))]
    then:
      - field: description
        function: truthy
      - field: description
        function: pattern
        functionOptions:
          match: .*(max-age|private|no-store|no-cache).*
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:parameters
      - spec:headers
      - topic:caching
      - experience:documentation
      - experience:reliability
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'document-cache-control-parameter' (Document Cache Control
      Parameter). Requirement: Cache usage SHOULD be extensively detailed in the
      `description` property to avoid data leaks or the usage of stale data. This
      rule should ensure in some way that the api provider documented extensively
      the cache usage to avoid data leaks or usage of stale data. For now this
      ruleset tests: * the presence of following keywords in the `description`:
      `max-age`, `private`, `no-store`, `no-cache`. * that one and only one
      between Expires and Cache-Control is used. `Cache-Control` and `Expires`
      should not be used in conjuction, because `Cache-Control` overrides
      `Expires` when `max-age` is set. Instead if neither `Cache-Control` or
      `Expires` are set, clients MAY use euristic cache like described in RFC7234.
      To fix: Ensure `description` is present and non-empty at each matching
      location. Also: Ensure `description` matches the regular expression
      `.*(max-age|private|no-store|no-cache).*`; rewrite any value that does not.
      This rule is evaluated at the JSONPath `$..[parameters][?(@.in == \"header\"
      && @.name.match(/Cache-Control/i))]` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
