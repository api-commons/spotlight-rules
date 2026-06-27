---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-text-plain-media-type
title: Request Support Text Plain Media Type
severity: info
given: $.paths.[*].requestBody.content[?(@property.indexOf('plain') === -1)]^
message: "{{description}}: {{error}}"
description: Every request MUST support `text/plain` media type.
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
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-text-plain-media-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-text-plain-media-type' (Request Support Text
  Plain Media Type). Requirement: Every request MUST support `text/plain` media
  type. To fix: Ensure the targeted value is absent or empty (falsy) at each
  matching location. This rule is evaluated at the JSONPath
  `$.paths.[*].requestBody.content[?(@property.indexOf('plain') === -1)]^` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-support-text-plain-media-type:
    title: Request Support Text Plain Media Type
    reference: https://spotlight-rules.com/spec/rules/openapi/request-support-text-plain-media-type/
    description: Every request MUST support `text/plain` media type.
    message: "{{description}}: {{error}}"
    severity: info
    given: $.paths.[*].requestBody.content[?(@property.indexOf('plain') === -1)]^
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
      governance rule 'request-support-text-plain-media-type' (Request Support
      Text Plain Media Type). Requirement: Every request MUST support `text/plain`
      media type. To fix: Ensure the targeted value is absent or empty (falsy) at
      each matching location. This rule is evaluated at the JSONPath
      `$.paths.[*].requestBody.content[?(@property.indexOf('plain') === -1)]^` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
