---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: error-schema-problem-property-names
title: Error Schema Problem Property Names
severity: hint
given: $.[responses][?(@property.match(/^(4|5|default)/))][[schema]][properties].*~
message: Error response doesn't seem to match RFC7807. Are you sure it is ok? {{path}}
description: 'WARN: This rule is under implementation and just provides an hint.
  Error management is a key enabler of a resilient API ecosystem. Enforcing a
  consistent schema for errors between different APIs, enables client to
  properly implement an error management strategy, with positive impacts for
  users. Errors should return RFC7807 objects. Instead, this schema seems to use
  non standard properties such as: `message`, `msg` and `code`. An error of the
  following form ``` { "msg": "Book with id: 123 does not exist.", "code": 6063
  } ``` can be expressed in RFC7807 with ``` { "detail": "Book with id: 123 does
  not exist.", "type": "https://api.example/v1/errors/6063", "status": 404,
  "title": "Not Found" } ``` Returning an URI in `type`, instead of an opaque
  `code` can help the client in better identifying the error; moreover the URI
  though it should not be dereferenced automatically, can return an actual
  resource providing guidance in addressing the issue. See recommendation
  RAC_REST_NAME_007. It requires the `@key` field not to match
  `message|code|msg` (evaluated at
  `$.[responses][?(@property.match(/^(4|5|default)/))][[schema]][properties].*~`).
  Severity: hint.'
experience:
  - error-handling
  - consistency
spec:
  - responses
  - schemas
source:
  - team-digitale
builtin: false
---
