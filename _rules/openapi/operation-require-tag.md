---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-require-tag
title: Operation Require Tag
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operations MUST Have Tags
description: Having tags applied to each API operations helps organize and group
  APIs in portals, documentation, search, and other ways in which APIs are made
  available.
experience:
  - discoverability
  - documentation
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-tag/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-require-tag' (Operation Require Tag). Requirement:
  Having tags applied to each API operations helps organize and group APIs in
  portals, documentation, search, and other ways in which APIs are made
  available. To fix: Ensure `tags` is present and non-empty at each matching
  location. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-require-tag:
    title: Operation Require Tag
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-require-tag/
    description: Having tags applied to each API operations helps organize and group
      APIs in portals, documentation, search, and other ways in which APIs are
      made available.
    message: Operations MUST Have Tags
    severity: info
    given: $.paths.*[get,post,patch,put,delete]
    then:
      - field: tags
        function: truthy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:discoverability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-require-tag' (Operation Require Tag).
      Requirement: Having tags applied to each API operations helps organize and
      group APIs in portals, documentation, search, and other ways in which APIs
      are made available. To fix: Ensure `tags` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.paths.*[get,post,patch,put,delete]` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
