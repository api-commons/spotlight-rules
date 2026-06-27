---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-collection-support-filtering
title: Operation Collection Support Filtering
severity: info
given: $.paths[*].get
message: Collection should support a filter query parameter.
description: Collection GET operations should support filtering via a filter
  query parameter (e.g. filter or filter[field]).
experience:
  - usability
  - discoverability
  - performance
spec:
  - parameters
topic:
  - pagination
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-collection-support-filtering/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-collection-support-filtering' (Operation Collection
  Support Filtering). Requirement: Collection GET operations should support
  filtering via a filter query parameter (e.g. filter or filter[field]). To fix:
  Adjust `parameters` so it conforms to the schema this rule requires. This rule
  is evaluated at the JSONPath `$.paths[*].get` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-collection-support-filtering:
    title: Operation Collection Support Filtering
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-collection-support-filtering/
    description: Collection GET operations should support filtering via a filter
      query parameter (e.g. filter or filter[field]).
    message: Collection should support a filter query parameter.
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
                pattern: ^filter
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
      governance rule 'operation-collection-support-filtering' (Operation
      Collection Support Filtering). Requirement: Collection GET operations should
      support filtering via a filter query parameter (e.g. filter or
      filter[field]). To fix: Adjust `parameters` so it conforms to the schema
      this rule requires. This rule is evaluated at the JSONPath `$.paths[*].get`
      — inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid OpenAPI. Return only the complete corrected document, with no
      commentary."
---
