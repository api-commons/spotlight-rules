---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: parameter-deprecated-require-description
title: Parameter Deprecated Require Description
severity: info
given: $..parameters[?(@ && @.deprecated == true)]
message: Deprecated parameter should describe the deprecation.
description: Deprecated parameters should have a description explaining the
  deprecation and what to use instead.
experience:
  - versioning
  - documentation
spec:
  - parameters
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/parameter-deprecated-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'parameter-deprecated-require-description' (Parameter
  Deprecated Require Description). Requirement: Deprecated parameters should
  have a description explaining the deprecation and what to use instead. To fix:
  Ensure `description` is present and non-empty at each matching location. This
  rule is evaluated at the JSONPath `$..parameters[?(@ && @.deprecated ==
  true)]` — inspect every location it matches and correct only what violates the
  rule. Make the smallest change that satisfies the rule, leave all unrelated
  content, key order, comments, and formatting unchanged, and keep the document
  valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  parameter-deprecated-require-description:
    title: Parameter Deprecated Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/parameter-deprecated-require-description/
    description: Deprecated parameters should have a description explaining the
      deprecation and what to use instead.
    message: Deprecated parameter should describe the deprecation.
    given: $..parameters[?(@ && @.deprecated == true)]
    severity: info
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:parameters
      - topic:deprecation
      - experience:versioning
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'parameter-deprecated-require-description' (Parameter
      Deprecated Require Description). Requirement: Deprecated parameters should
      have a description explaining the deprecation and what to use instead. To
      fix: Ensure `description` is present and non-empty at each matching
      location. This rule is evaluated at the JSONPath `$..parameters[?(@ &&
      @.deprecated == true)]` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
