---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-owasp-api3-define-error-validation
title: Response OWASP API3 Define Error Validation
severity: info
given: $.paths[*][post,put,patch].responses
message: Write operations should define a 400 or 422 validation error response.
description: Write operations (POST/PUT/PATCH) should define a 400 or 422
  validation error response (OWASP API3 — reject malformed or unexpected
  properties).
experience:
  - security
spec:
  - responses
topic: []
owasp:
  - api3
reference: https://spotlight-rules.com/spec/rules/openapi/response-owasp-api3-define-error-validation/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-owasp-api3-define-error-validation' (Response OWASP
  API3 Define Error Validation). Requirement: Write operations (POST/PUT/PATCH)
  should define a 400 or 422 validation error response (OWASP API3 — reject
  malformed or unexpected properties). To fix: Adjust the targeted value so it
  conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$.paths[*][post,put,patch].responses` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-owasp-api3-define-error-validation:
    title: Response OWASP API3 Define Error Validation
    reference: https://spotlight-rules.com/spec/rules/openapi/response-owasp-api3-define-error-validation/
    description: Write operations (POST/PUT/PATCH) should define a 400 or 422
      validation error response (OWASP API3 — reject malformed or unexpected
      properties).
    message: Write operations should define a 400 or 422 validation error response.
    given: $.paths[*][post,put,patch].responses
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          anyOf:
            - required:
                - "400"
            - required:
                - "422"
    tags:
      - format:openapi
      - spec:responses
      - experience:security
      - owasp:api3
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-owasp-api3-define-error-validation' (Response
      OWASP API3 Define Error Validation). Requirement: Write operations
      (POST/PUT/PATCH) should define a 400 or 422 validation error response (OWASP
      API3 — reject malformed or unexpected properties). To fix: Adjust the
      targeted value so it conforms to the schema this rule requires. This rule is
      evaluated at the JSONPath `$.paths[*][post,put,patch].responses` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
