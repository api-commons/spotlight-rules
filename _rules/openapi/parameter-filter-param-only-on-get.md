---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-filter-param-only-on-get
title: Parameter Filter Param Only On Get
severity: info
given: $.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
  @.name=='filter')].name
message: Only GET-based endpoints SHOULD have have the query parameter 'filter'.
description: Only GET-based endpoints SHOULD have have the query parameter 'filter'.
experience:
  - consistency
  - usability
spec:
  - paths
  - operations
  - parameters
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-filter-param-only-on-get/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-filter-param-only-on-get' (Parameter Filter Param
  Only On Get). Requirement: Only GET-based endpoints SHOULD have have the query
  parameter 'filter'. To fix: Ensure the targeted value is absent or empty
  (falsy) at each matching location. This rule is evaluated at the JSONPath
  `$.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
  @.name=='filter')].name` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  parameter-filter-param-only-on-get:
    title: Parameter Filter Param Only On Get
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-filter-param-only-on-get/
    description: Only GET-based endpoints SHOULD have have the query parameter 'filter'.
    message: Only GET-based endpoints SHOULD have have the query parameter 'filter'.
    severity: info
    given: $.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
      @.name=='filter')].name
    then:
      function: falsy
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - spec:parameters
      - experience:consistency
      - experience:usability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-filter-param-only-on-get' (Parameter Filter Param
      Only On Get). Requirement: Only GET-based endpoints SHOULD have have the
      query parameter 'filter'. To fix: Ensure the targeted value is absent or
      empty (falsy) at each matching location. This rule is evaluated at the
      JSONPath `$.paths.*[?(@property!='get')].parameters.[?(@.in=='query' &&
      @.name=='filter')].name` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
