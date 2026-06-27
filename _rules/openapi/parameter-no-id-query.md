---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-no-id-query
title: Parameter No ID Query
severity: info
given: $.paths..get.parameters.[?(@.in=='query' && @.name=='id')]
message: Resource identifier filtering is not allowed as a query parameter.
description: Resource identifier filtering is not allowed as a query parameter.
  Use the resource identifier in the URL path.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-id-query/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-no-id-query' (Parameter No ID Query). Requirement:
  Resource identifier filtering is not allowed as a query parameter. Use the
  resource identifier in the URL path. To fix: Ensure `name` does NOT match the
  regular expression `^id$`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths..get.parameters.[?(@.in=='query' &&
  @.name=='id')]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  parameter-no-id-query:
    title: Parameter No ID Query
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-no-id-query/
    description: Resource identifier filtering is not allowed as a query parameter.
      Use the resource identifier in the URL path.
    message: Resource identifier filtering is not allowed as a query parameter.
    severity: info
    given: $.paths..get.parameters.[?(@.in=='query' && @.name=='id')]
    then:
      field: name
      function: pattern
      functionOptions:
        notMatch: ^id$
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:parameters
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-no-id-query' (Parameter No ID Query).
      Requirement: Resource identifier filtering is not allowed as a query
      parameter. Use the resource identifier in the URL path. To fix: Ensure
      `name` does NOT match the regular expression `^id$`; rename or rewrite any
      value that does. This rule is evaluated at the JSONPath
      `$.paths..get.parameters.[?(@.in=='query' && @.name=='id')]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
