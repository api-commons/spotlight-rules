---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-patch-media-type-not-plain-json
title: Request Patch Media Type Not Plain JSON
severity: info
given: $.[patch][requestBody][content]
message: application/json is not an appropriate media-type for PATCH. {{path}}
description: 'The PATCH specification explicits that the request body contains a
  "patch document" describing the changes to be applied to the target resource.
  To avoid confusion, [this errata](https://www.rfc-editor.org/errata/eid3169)
  explains that `application/json` is not an appropriate media-type for `PATCH`.
  A correct example of PATCH using eg. `application/json-patch+json` media-type
  defined in RFC6902. ``` paths: /books/{book_id}: patch: requestBody: content:
  application/json-patch+json: schema: type: object example: [{ "op": "add",
  "path": "/baz", "value": "qux" }] ```.'
experience:
  - consistency
  - data-modeling
spec:
  - operations
  - request-body
  - media-types
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-patch-media-type-not-plain-json/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-patch-media-type-not-plain-json' (Request Patch Media
  Type Not Plain JSON). Requirement: The PATCH specification explicits that the
  request body contains a \"patch document\" describing the changes to be
  applied to the target resource. To avoid confusion, [this
  errata](https://www.rfc-editor.org/errata/eid3169) explains that
  `application/json` is not an appropriate media-type for `PATCH`. A correct
  example of PATCH using eg. `application/json-patch+json` media-type defined in
  RFC6902. ``` paths: /books/{book_id}: patch: requestBody: content:
  application/json-patch+json: schema: type: object example: [{ \"op\": \"add\",
  \"path\": \"/baz\", \"value\": \"qux\" }] ```. To fix: Ensure
  `application/json` is absent or empty (falsy) at each matching location. This
  rule is evaluated at the JSONPath `$.[patch][requestBody][content]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
