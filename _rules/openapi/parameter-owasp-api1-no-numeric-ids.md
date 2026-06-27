---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-owasp-api1-no-numeric-ids
title: Parameter OWASP API1 No Numeric IDs
severity: info
given: $.paths[*][*].parameters[?(@ && @.in == 'path')].schema
message: Path parameter should not be an integer (use a non-enumerable id, e.g. UUID).
description: Path parameters should not be sequential integers (BOLA / object
  enumeration, OWASP API1) — use a non-guessable identifier such as a UUID.
experience:
  - security
spec:
  - parameters
topic: []
owasp:
  - api1
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-owasp-api1-no-numeric-ids/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-owasp-api1-no-numeric-ids' (Parameter OWASP API1 No
  Numeric IDs). Requirement: Path parameters should not be sequential integers
  (BOLA / object enumeration, OWASP API1) — use a non-guessable identifier such
  as a UUID. To fix: Adjust the targeted value so it conforms to the schema this
  rule requires. This rule is evaluated at the JSONPath
  `$.paths[*][*].parameters[?(@ && @.in == 'path')].schema` — inspect every
  location it matches and correct only what violates the rule. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid OpenAPI.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-owasp-api1-no-numeric-ids:
    title: Parameter OWASP API1 No Numeric IDs
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-owasp-api1-no-numeric-ids/
    description: Path parameters should not be sequential integers (BOLA / object
      enumeration, OWASP API1) — use a non-guessable identifier such as a UUID.
    message: Path parameter should not be an integer (use a non-enumerable id, e.g. UUID).
    given: $.paths[*][*].parameters[?(@ && @.in == 'path')].schema
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          properties:
            type:
              not:
                enum:
                  - integer
                  - number
    tags:
      - format:openapi
      - spec:parameters
      - experience:security
      - owasp:api1
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-owasp-api1-no-numeric-ids' (Parameter OWASP API1
      No Numeric IDs). Requirement: Path parameters should not be sequential
      integers (BOLA / object enumeration, OWASP API1) — use a non-guessable
      identifier such as a UUID. To fix: Adjust the targeted value so it conforms
      to the schema this rule requires. This rule is evaluated at the JSONPath
      `$.paths[*][*].parameters[?(@ && @.in == 'path')].schema` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
