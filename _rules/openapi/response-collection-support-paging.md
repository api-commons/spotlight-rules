---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-collection-support-paging
title: Response Collection Support Paging
severity: info
given: $.paths[?(!@property.match(/.*\/\{[^}]+\}.*$/))].get.responses['200'].content.application/json.schema.properties
message: Response bodies from collection endpoints SHOULD offer paging capability.
description: Response bodies from collection endpoints SHOULD offer paging capability.
experience:
  - pagination
  - usability
  - performance
spec:
  - paths
  - operations
  - responses
  - media-types
  - schemas
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-collection-support-paging/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-collection-support-paging' (Response Collection
  Support Paging). Requirement: Response bodies from collection endpoints SHOULD
  offer paging capability. To fix: Ensure `paging` is present and non-empty at
  each matching location. Also: Ensure `paging` matches the regular expression
  `object`; rewrite any value that does not. Also: Ensure `paging.type` matches
  the regular expression `object`; rewrite any value that does not. This rule is
  evaluated at the JSONPath
  `$.paths[?(!@property.match(/.*\\/\\{[^}]+\\}.*$/))].get.responses['200'].con\
  tent.application/json.schema.properties` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
---
