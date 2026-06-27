---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-pagination-params-in-query
title: Parameter Pagination Params In Query
severity: info
given: $.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit' ||
  @.name == 'offset' || @.name == 'cursor' || @.name == 'per_page' || @.name ==
  'page_size')]
message: Pagination Parameters MUST Be Query Parameters
description: Pagination parameters like page, limit, offset, and cursor should
  be passed as query parameters, not in headers or path segments. Analysis
  confirms 100% of pagination parameters observed are query parameters.
experience:
  - pagination
  - consistency
  - performance
spec:
  - paths
  - operations
  - parameters
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-pagination-params-in-query/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-pagination-params-in-query' (Parameter Pagination
  Params In Query). Requirement: Pagination parameters like page, limit, offset,
  and cursor should be passed as query parameters, not in headers or path
  segments. Analysis confirms 100% of pagination parameters observed are query
  parameters. To fix: Ensure `in` matches the regular expression `query`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit' || @.name
  == 'offset' || @.name == 'cursor' || @.name == 'per_page' || @.name ==
  'page_size')]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  parameter-pagination-params-in-query:
    title: Parameter Pagination Params In Query
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-pagination-params-in-query/
    description: Pagination parameters like page, limit, offset, and cursor should
      be passed as query parameters, not in headers or path segments. Analysis
      confirms 100% of pagination parameters observed are query parameters.
    message: Pagination Parameters MUST Be Query Parameters
    severity: info
    given: $.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit' ||
      @.name == 'offset' || @.name == 'cursor' || @.name == 'per_page' || @.name
      == 'page_size')]
    then:
      field: in
      function: pattern
      functionOptions:
        match: query
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:parameters
      - topic:pagination
      - experience:pagination
      - experience:consistency
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-pagination-params-in-query' (Parameter Pagination
      Params In Query). Requirement: Pagination parameters like page, limit,
      offset, and cursor should be passed as query parameters, not in headers or
      path segments. Analysis confirms 100% of pagination parameters observed are
      query parameters. To fix: Ensure `in` matches the regular expression
      `query`; rewrite any value that does not. This rule is evaluated at the
      JSONPath `$.paths[*].get.parameters[?(@.name == 'page' || @.name == 'limit'
      || @.name == 'offset' || @.name == 'cursor' || @.name == 'per_page' ||
      @.name == 'page_size')]` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
