---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-error-use-problem-type
title: Response Error Use Problem Type
severity: info
given: $.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~
message: Error responses should support RFC7807 in {{path}}.
description: 'Error management is a key enabler of a resilient API ecosystem.
  Enforcing a consistent schema for errors between different APIs, enables
  client to properly implement an error management strategy, with positive
  impacts for users. Error responses should return one of the media-type defined
  in RFC7807: - `application/problem+json` - `application/problem+xml` An
  example of a valid response: ``` responses: "503": content:
  application/problem+json: schema: ... ```.'
experience:
  - error-handling
  - consistency
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-error-use-problem-type/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-error-use-problem-type' (Response Error Use Problem
  Type). Requirement: Error management is a key enabler of a resilient API
  ecosystem. Enforcing a consistent schema for errors between different APIs,
  enables client to properly implement an error management strategy, with
  positive impacts for users. Error responses should return one of the
  media-type defined in RFC7807: - `application/problem+json` -
  `application/problem+xml` An example of a valid response: ``` responses:
  \"503\": content: application/problem+json: schema: ... ```. To fix: Set the
  targeted value to one of the allowed values: application/problem+xml,
  application/problem+json. This rule is evaluated at the JSONPath
  `$.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-error-use-problem-type:
    title: Response Error Use Problem Type
    reference: https://spotlight-rules.com/spec/rules/openapi/response-error-use-problem-type/
    description: 'Error management is a key enabler of a resilient API ecosystem.
      Enforcing a consistent schema for errors between different APIs, enables
      client to properly implement an error management strategy, with positive
      impacts for users. Error responses should return one of the media-type
      defined in RFC7807: - `application/problem+json` - `application/problem+xml`
      An example of a valid response: ``` responses: "503": content:
      application/problem+json: schema: ... ```.'
    message: Error responses should support RFC7807 in {{path}}.
    severity: info
    given: $.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - application/problem+xml
          - application/problem+json
    formats:
      - oas3
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:media-types
      - experience:error-handling
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-error-use-problem-type' (Response Error Use
      Problem Type). Requirement: Error management is a key enabler of a resilient
      API ecosystem. Enforcing a consistent schema for errors between different
      APIs, enables client to properly implement an error management strategy,
      with positive impacts for users. Error responses should return one of the
      media-type defined in RFC7807: - `application/problem+json` -
      `application/problem+xml` An example of a valid response: ``` responses:
      \"503\": content: application/problem+json: schema: ... ```. To fix: Set the
      targeted value to one of the allowed values: application/problem+xml,
      application/problem+json. This rule is evaluated at the JSONPath
      `$.paths.[*].responses[?(@property.match(/^(4|5|default)/))].content.*~` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
