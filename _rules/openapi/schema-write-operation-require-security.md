---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-write-operation-require-security
title: Schema Write Operation Require Security
severity: info
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
  type: bearer bearerFormat: JWT ```."
experience:
  - security
spec:
  - paths
  - operations
topic: []
owasp:
  - api2
reference: https://spotlight-rules.com/spec/rules/openapi/schema-write-operation-require-security/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-write-operation-require-security' (Schema Write
  Operation Require Security). Requirement: Your API should be protected by a
  `security` rule either at global or operation level. Operations should be
  protected specially when they are tied to non-idempotent HTTP methods like
  `POST`, `PUT`, `PATCH` and `DELETE`. This is done with one or more non-empty
  `security` rules. Security rules are defined in the `securityScheme` section.
  An example of a security rule applied at global level. ``` security: -
  BasicAuth: [] paths: /books: {} /users: {} securitySchemes: BasicAuth: scheme:
  http type: basic ``` An example of a security rule applied at operation level,
  which eventually overrides the global one ``` paths: /books: post: security: -
  AccessToken: [] securitySchemes: BasicAuth: scheme: http type: basic
  AccessToken: scheme: http type: bearer bearerFormat: JWT ```. To fix: Adjust
  `security` so it conforms to the schema this rule requires. Guidance: The
  following non-idempotent operation is not protected by a `security` rule. This
  rule is evaluated at the JSONPath
  `$.paths.*[?(@property.match(/^(post|put|patch|delete)/))]` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
---
