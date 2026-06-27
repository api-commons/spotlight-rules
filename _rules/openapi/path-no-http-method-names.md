---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-http-method-names
title: Path No HTTP Method Names
severity: info
given: $.paths[?(@property.match( /\/(get|post|put|delete|patch)[\/A-Z_\-]?/
  ))]~ | $.paths[?(@property.match( /\/(create|remove|list)[\/A-Z_\-]?/ ))]~
message: API "path" contains a name of an http method. {{error}}
description: "When you design a REST API, you don't usually need to mention
  terms like `get`, `delete` and so on in your `paths`, because this information
  is conveyed by the HTTP method. Instead of using ``` POST /books/1234/delete
  HTTP/1.1 Host: api.example ``` You can simply call ``` DELETE /books/1234
  HTTP/1.1 Host: api.example ``` Similarly you don't need verbs like `list` or
  `create` because the HTTP Semantics RFC7231 supports this kind of actions
  natively with proper methods and status code. Instead of ``` POST /create/user
  HTTP/1.1 Host: api.example Content-Type: application/json {\"given_name\":
  \"Mario\"} ``` You can use ``` POST /create/user HTTP/1.1 Host: api.example
  Content-Type: application/json {\"given_name\": \"Mario\"} ``` returning a
  proper response ``` HTTP/1.1 201 Created Location: /users/1234 ``` This
  simplifies securing your API as you know beforehand the kind of action which
  is going to be performed."
experience:
  - naming
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-http-method-names/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-http-method-names' (Path No HTTP Method Names).
  Requirement: When you design a REST API, you don't usually need to mention
  terms like `get`, `delete` and so on in your `paths`, because this information
  is conveyed by the HTTP method. Instead of using ``` POST /books/1234/delete
  HTTP/1.1 Host: api.example ``` You can simply call ``` DELETE /books/1234
  HTTP/1.1 Host: api.example ``` Similarly you don't need verbs like `list` or
  `create` because the HTTP Semantics RFC7231 supports this kind of actions
  natively with proper methods and status code. Instead of ``` POST /create/user
  HTTP/1.1 Host: api.example Content-Type: application/json {\"given_name\":
  \"Mario\"} ``` You can use ``` POST /create/user HTTP/1.1 Host: api.example
  Content-Type: application/json {\"given_name\": \"Mario\"} ``` returning a
  proper response ``` HTTP/1.1 201 Created Location: /users/1234 ``` This
  simplifies securing your API as you know beforehand the kind of action which
  is going to be performed. To fix: Remove `@key` from each matching location.
  This rule is evaluated at the JSONPath `$.paths[?(@property.match(
  /\\/(get|post|put|delete|patch)[\\/A-Z_\\-]?/ ))]~ |
  $.paths[?(@property.match( /\\/(create|remove|list)[\\/A-Z_\\-]?/ ))]~` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  path-no-http-method-names:
    title: Path No HTTP Method Names
    reference: https://spotlight-rules.com/spec/rules/openapi/path-no-http-method-names/
    description: "When you design a REST API, you don't usually need to mention
      terms like `get`, `delete` and so on in your `paths`, because this
      information is conveyed by the HTTP method. Instead of using ``` POST
      /books/1234/delete HTTP/1.1 Host: api.example ``` You can simply call ```
      DELETE /books/1234 HTTP/1.1 Host: api.example ``` Similarly you don't need
      verbs like `list` or `create` because the HTTP Semantics RFC7231 supports
      this kind of actions natively with proper methods and status code. Instead
      of ``` POST /create/user HTTP/1.1 Host: api.example Content-Type:
      application/json {\"given_name\": \"Mario\"} ``` You can use ``` POST
      /create/user HTTP/1.1 Host: api.example Content-Type: application/json
      {\"given_name\": \"Mario\"} ``` returning a proper response ``` HTTP/1.1 201
      Created Location: /users/1234 ``` This simplifies securing your API as you
      know beforehand the kind of action which is going to be performed."
    message: API "path" contains a name of an http method. {{error}}
    severity: info
    given:
      - $.paths[?(@property.match( /\/(get|post|put|delete|patch)[\/A-Z_\-]?/ ))]~
      - $.paths[?(@property.match( /\/(create|remove|list)[\/A-Z_\-]?/ ))]~
    then:
      field: "@key"
      function: undefined
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'path-no-http-method-names' (Path No HTTP Method Names).
      Requirement: When you design a REST API, you don't usually need to mention
      terms like `get`, `delete` and so on in your `paths`, because this
      information is conveyed by the HTTP method. Instead of using ``` POST
      /books/1234/delete HTTP/1.1 Host: api.example ``` You can simply call ```
      DELETE /books/1234 HTTP/1.1 Host: api.example ``` Similarly you don't need
      verbs like `list` or `create` because the HTTP Semantics RFC7231 supports
      this kind of actions natively with proper methods and status code. Instead
      of ``` POST /create/user HTTP/1.1 Host: api.example Content-Type:
      application/json {\"given_name\": \"Mario\"} ``` You can use ``` POST
      /create/user HTTP/1.1 Host: api.example Content-Type: application/json
      {\"given_name\": \"Mario\"} ``` returning a proper response ``` HTTP/1.1 201
      Created Location: /users/1234 ``` This simplifies securing your API as you
      know beforehand the kind of action which is going to be performed. To fix:
      Remove `@key` from each matching location. This rule is evaluated at the
      JSONPath `$.paths[?(@property.match(
      /\\/(get|post|put|delete|patch)[\\/A-Z_\\-]?/ ))]~ |
      $.paths[?(@property.match( /\\/(create|remove|list)[\\/A-Z_\\-]?/ ))]~` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
