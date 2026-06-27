---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-options-must-not-have-body
title: Request Options Must Not Have Body
severity: info
given: $.paths[*][options].requestBody
message: An `OPTIONS` request MUST NOT accept a request body.
description: An `OPTIONS` request MUST NOT accept a request body.
experience:
  - consistency
  - reliability
spec:
  - paths
  - operations
  - request-body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-options-must-not-have-body/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-options-must-not-have-body' (Request Options Must Not
  Have Body). Requirement: An `OPTIONS` request MUST NOT accept a request body.
  To fix: Remove the targeted value from each matching location. This rule is
  evaluated at the JSONPath `$.paths[*][options].requestBody` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-options-must-not-have-body:
    title: Request Options Must Not Have Body
    reference: https://spotlight-rules.com/spec/rules/openapi/request-options-must-not-have-body/
    description: An `OPTIONS` request MUST NOT accept a request body.
    message: An `OPTIONS` request MUST NOT accept a request body.
    severity: info
    given: $.paths[*][options].requestBody
    then:
      function: undefined
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:request-body
      - experience:consistency
      - experience:reliability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-options-must-not-have-body' (Request Options Must
      Not Have Body). Requirement: An `OPTIONS` request MUST NOT accept a request
      body. To fix: Remove the targeted value from each matching location. This
      rule is evaluated at the JSONPath `$.paths[*][options].requestBody` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
