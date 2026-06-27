---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-deprecated-require-description
title: Operation Deprecated Require Description
severity: info
given: $.paths[*][?(@ && @.deprecated == true)]
message: Deprecated operation should describe the deprecation and successor.
description: Deprecated operations should have a description explaining the
  deprecation and the migration path / successor.
experience:
  - versioning
  - documentation
  - governance
spec:
  - paths
topic:
  - deprecation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-deprecated-require-description/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-deprecated-require-description' (Operation
  Deprecated Require Description). Requirement: Deprecated operations should
  have a description explaining the deprecation and the migration path /
  successor. To fix: Ensure `description` is present and non-empty at each
  matching location. This rule is evaluated at the JSONPath `$.paths[*][?(@ &&
  @.deprecated == true)]` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  operation-deprecated-require-description:
    title: Operation Deprecated Require Description
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-deprecated-require-description/
    description: Deprecated operations should have a description explaining the
      deprecation and the migration path / successor.
    message: Deprecated operation should describe the deprecation and successor.
    given: $.paths[*][?(@ && @.deprecated == true)]
    severity: info
    then:
      field: description
      function: truthy
    tags:
      - format:openapi
      - spec:paths
      - topic:deprecation
      - experience:versioning
      - experience:documentation
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-deprecated-require-description' (Operation
      Deprecated Require Description). Requirement: Deprecated operations should
      have a description explaining the deprecation and the migration path /
      successor. To fix: Ensure `description` is present and non-empty at each
      matching location. This rule is evaluated at the JSONPath `$.paths[*][?(@ &&
      @.deprecated == true)]` — inspect every location it matches and correct only
      what violates the rule. Make the smallest change that satisfies the rule,
      leave all unrelated content, key order, comments, and formatting unchanged,
      and keep the document valid OpenAPI. Return only the complete corrected
      document, with no commentary."
---
