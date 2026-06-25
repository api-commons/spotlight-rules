---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: patch-media-type-not-plain-json
title: Patch Media Type Not Plain JSON
severity: error
given: $.[patch][requestBody][content]
message: application/json is not an appropriate media-type for PATCH. {{path}}
description: 'The PATCH specification explicits that the request body contains a
  "patch document" describing the changes to be applied to the target resource.
  To avoid confusion, [this errata](https://www.rfc-editor.org/errata/eid3169)
  explains that `application/json` is not an appropriate media-type for `PATCH`.
  A correct example of PATCH using eg. `application/json-patch+json` media-type
  defined in RFC6902. ``` paths: /books/{book_id}: patch: requestBody: content:
  application/json-patch+json: schema: type: object example: [{ "op": "add",
  "path": "/baz", "value": "qux" }] ```. It requires the `application/json`
  field to be absent or empty (evaluated at `$.[patch][requestBody][content]`).
  Severity: error.'
experience:
  - consistency
  - data-modeling
spec:
  - operations
  - request-body
  - media-types
source:
  - team-digitale
builtin: false
---
