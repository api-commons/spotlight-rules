---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-collection-support-sorting
title: Operation Collection Support Sorting
severity: info
given: $.paths[*].get
message: Collection should support a sort/order query parameter.
description: Collection GET operations should support sorting via a sort or
  order query parameter.
experience:
  - usability
  - discoverability
  - performance
spec:
  - parameters
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-collection-support-sorting/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-collection-support-sorting' (Operation Collection
  Support Sorting). Requirement: Collection GET operations should support
  sorting via a sort or order query parameter. To fix: Adjust `parameters` so it
  conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$.paths[*].get` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  operation-collection-support-sorting:
    title: Operation Collection Support Sorting
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-collection-support-sorting/
    description: Collection GET operations should support sorting via a sort or
      order query parameter.
    message: Collection should support a sort/order query parameter.
    given: $.paths[*].get
    severity: info
    then:
      field: parameters
      function: schema
      functionOptions:
        schema:
          type: array
          contains:
            type: object
            required:
              - name
              - in
            properties:
              name:
                pattern: ^(sort|order)
              in:
                const: query
    tags:
      - format:openapi
      - spec:parameters
      - topic:pagination
      - experience:usability
      - experience:discoverability
      - experience:performance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-collection-support-sorting' (Operation Collection
      Support Sorting). Requirement: Collection GET operations should support
      sorting via a sort or order query parameter. To fix: Adjust `parameters` so
      it conforms to the schema this rule requires. This rule is evaluated at the
      JSONPath `$.paths[*].get` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
