---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-form-urlencoded-media-type
title: Request Support Form Urlencoded Media Type
severity: info
given: $.paths.[*].requestBody.content[?(@property.indexOf('urlencoded') === -1)]^
message: "{{description}}: {{error}}"
description: Every request MUST support `application/x-www-form-urlencoded` media type.
experience:
  - consistency
  - usability
spec:
  - paths
  - request-body
  - media-types
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-form-urlencoded-media-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-form-urlencoded-media-type' (Request Support
  Form Urlencoded Media Type). Requirement: Every request MUST support
  `application/x-www-form-urlencoded` media type. To fix: Ensure the targeted
  value is absent or empty (falsy) at each matching location. This rule is
  evaluated at the JSONPath
  `$.paths.[*].requestBody.content[?(@property.indexOf('urlencoded') === -1)]^`
  — inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-support-form-urlencoded-media-type:
    title: Request Support Form Urlencoded Media Type
    reference: https://spotlight-rules.com/spec/rules/openapi/request-support-form-urlencoded-media-type/
    description: Every request MUST support `application/x-www-form-urlencoded` media type.
    message: "{{description}}: {{error}}"
    severity: info
    given: $.paths.[*].requestBody.content[?(@property.indexOf('urlencoded') === -1)]^
    then:
      function: falsy
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:request-body
      - spec:media-types
      - topic:content-negotiation
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-support-form-urlencoded-media-type' (Request
      Support Form Urlencoded Media Type). Requirement: Every request MUST support
      `application/x-www-form-urlencoded` media type. To fix: Ensure the targeted
      value is absent or empty (falsy) at each matching location. This rule is
      evaluated at the JSONPath
      `$.paths.[*].requestBody.content[?(@property.indexOf('urlencoded') ===
      -1)]^` — inspect every location it matches and correct only what violates
      the rule. Make the smallest change that satisfies the rule, leave all
      unrelated content, key order, comments, and formatting unchanged, and keep
      the document valid OpenAPI. Return only the complete corrected document,
      with no commentary."
---
