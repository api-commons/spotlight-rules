---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-schema-problem-property-names
title: Response Error Schema Problem Property Names
severity: info
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
  RAC_REST_NAME_007.'
experience:
  - error-handling
  - consistency
spec:
  - responses
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-schema-problem-property-names/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-schema-problem-property-names' (Response Error
  Schema Problem Property Names). Requirement: WARN: This rule is under
  implementation and just provides an hint. Error management is a key enabler of
  a resilient API ecosystem. Enforcing a consistent schema for errors between
  different APIs, enables client to properly implement an error management
  strategy, with positive impacts for users. Errors should return RFC7807
  objects. Instead, this schema seems to use non standard properties such as:
  `message`, `msg` and `code`. An error of the following form ``` { \"msg\":
  \"Book with id: 123 does not exist.\", \"code\": 6063 } ``` can be expressed
  in RFC7807 with ``` { \"detail\": \"Book with id: 123 does not exist.\",
  \"type\": \"https://api.example/v1/errors/6063\", \"status\": 404, \"title\":
  \"Not Found\" } ``` Returning an URI in `type`, instead of an opaque `code`
  can help the client in better identifying the error; moreover the URI though
  it should not be dereferenced automatically, can return an actual resource
  providing guidance in addressing the issue. See recommendation
  RAC_REST_NAME_007. To fix: Ensure `@key` does NOT match the regular expression
  `message|code|msg`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath
  `$.[responses][?(@property.match(/^(4|5|default)/))][[schema]][properties].*~`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
---
