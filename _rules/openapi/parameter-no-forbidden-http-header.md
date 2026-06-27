---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-no-forbidden-http-header
title: Parameter No Forbidden HTTP Header
severity: info
given: $..parameters[?(@.in == 'header')].name | $.[responses][*].headers.*~
message: "{{error}} in {{path}} {{value}}"
description: "OAS do not allow using the following HTTP headers in a
  specification file: Authorization, Content-Type and Accept. You MUST use the
  associate functionalities provided by OAS, instead."
experience:
  - consistency
  - governance
spec:
  - parameters
  - responses
  - headers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-forbidden-http-header/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-no-forbidden-http-header' (Parameter No Forbidden
  HTTP Header). Requirement: OAS do not allow using the following HTTP headers
  in a specification file: Authorization, Content-Type and Accept. You MUST use
  the associate functionalities provided by OAS, instead. To fix: Ensure the
  targeted value does NOT match the regular expression
  `/^(accept|content-type|authorization)$/i`; rename or rewrite any value that
  does. This rule is evaluated at the JSONPath `$..parameters[?(@.in ==
  'header')].name | $.[responses][*].headers.*~` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  parameter-no-forbidden-http-header:
    title: Parameter No Forbidden HTTP Header
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-forbidden-http-header/
    description: "OAS do not allow using the following HTTP headers in a
      specification file: Authorization, Content-Type and Accept. You MUST use the
      associate functionalities provided by OAS, instead."
    message: "{{error}} in {{path}} {{value}}"
    severity: info
    given:
      - $..parameters[?(@.in == 'header')].name
      - $.[responses][*].headers.*~
    then:
      function: pattern
      functionOptions:
        notMatch: /^(accept|content-type|authorization)$/i
    tags:
      - format:openapi
      - spec:parameters
      - spec:responses
      - spec:headers
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-no-forbidden-http-header' (Parameter No Forbidden
      HTTP Header). Requirement: OAS do not allow using the following HTTP headers
      in a specification file: Authorization, Content-Type and Accept. You MUST
      use the associate functionalities provided by OAS, instead. To fix: Ensure
      the targeted value does NOT match the regular expression
      `/^(accept|content-type|authorization)$/i`; rename or rewrite any value that
      does. This rule is evaluated at the JSONPath `$..parameters[?(@.in ==
      'header')].name | $.[responses][*].headers.*~` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
