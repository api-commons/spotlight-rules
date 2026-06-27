---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-collection-limit-param-default
title: Parameter Collection Limit Param Default
severity: info
given: $.paths[*].get.parameters[?(@ && @.in == 'query' && (@.name == 'limit' ||
  @.name == 'per_page' || @.name == 'page_size' || @.name ==
  'pageSize'))].schema
message: limit parameter should declare a default.
description: The limit / page-size query parameter should declare a default so
  the page size is predictable when the caller omits it.
experience:
  - pagination
  - usability
  - performance
spec:
  - parameters
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-collection-limit-param-default/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-collection-limit-param-default' (Parameter
  Collection Limit Param Default). Requirement: The limit / page-size query
  parameter should declare a default so the page size is predictable when the
  caller omits it. To fix: Ensure `default` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath
  `$.paths[*].get.parameters[?(@ && @.in == 'query' && (@.name == 'limit' ||
  @.name == 'per_page' || @.name == 'page_size' || @.name ==
  'pageSize'))].schema` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-collection-limit-param-default:
    title: Parameter Collection Limit Param Default
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-collection-limit-param-default/
    description: The limit / page-size query parameter should declare a default so
      the page size is predictable when the caller omits it.
    message: limit parameter should declare a default.
    given: $.paths[*].get.parameters[?(@ && @.in == 'query' && (@.name == 'limit' ||
      @.name == 'per_page' || @.name == 'page_size' || @.name ==
      'pageSize'))].schema
    severity: info
    then:
      field: default
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - topic:pagination
      - experience:pagination
      - experience:usability
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-collection-limit-param-default' (Parameter
      Collection Limit Param Default). Requirement: The limit / page-size query
      parameter should declare a default so the page size is predictable when the
      caller omits it. To fix: Ensure `default` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath
      `$.paths[*].get.parameters[?(@ && @.in == 'query' && (@.name == 'limit' ||
      @.name == 'per_page' || @.name == 'page_size' || @.name ==
      'pageSize'))].schema` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
