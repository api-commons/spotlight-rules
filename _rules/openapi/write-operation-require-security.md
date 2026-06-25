---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: write-operation-require-security
title: Write Operation Require Security
severity: error
given: $.paths.*[?(@property.match(/^(post|put|patch|delete)/))]
message: "The following non-idempotent operation is not protected by a
  `security` rule: {{path}}"
description: "Your API should be protected by a `security` rule either at global
  or operation level. Operations should be protected specially when they are
  tied to non-idempotent HTTP methods like `POST`, `PUT`, `PATCH` and `DELETE`.
  This is done with one or more non-empty `security` rules. Security rules are
  defined in the `securityScheme` section. An example of a security rule applied
  at global level. ``` security: - BasicAuth: [] paths: /books: {} /users: {}
  securitySchemes: BasicAuth: scheme: http type: basic ``` An example of a
  security rule applied at operation level, which eventually overrides the
  global one ``` paths: /books: post: security: - AccessToken: []
  securitySchemes: BasicAuth: scheme: http type: basic AccessToken: scheme: http
  type: bearer bearerFormat: JWT ```. It validates the `security` field against
  a JSON Schema (evaluated at
  `$.paths.*[?(@property.match(/^(post|put|patch|delete)/))]`). Severity:
  error."
experience:
  - security
spec:
  - paths
  - operations
source:
  - team-digitale
builtin: false
---
