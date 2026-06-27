---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-api-servers
title: OAS3 API Servers
severity: info
given: $
message: OpenAPI "servers" must be present and non-empty array.
description: OpenAPI "servers" must be present and non-empty array.
experience:
  - usability
  - reliability
  - documentation
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/oas3-api-servers/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'oas3-api-servers' (OAS3 API Servers). Requirement: OpenAPI
  \"servers\" must be present and non-empty array. To fix: Adjust `servers` so
  it conforms to the schema this rule requires. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: true
ruleyaml: >
  oas3-api-servers:
    title: OAS3 API Servers
    reference: https://spotlight-rules.com/spec/rules/openapi/oas3-api-servers/
    description: OpenAPI "servers" must be present and non-empty array.
    message: OpenAPI "servers" must be present and non-empty array.
    severity: info
    given: $
    then:
      field: servers
      function: schema
      functionOptions:
        dialect: draft7
        schema:
          items:
            type: object
          minItems: 1
          type: array
    tags:
      - format:openapi
      - spec:document
      - experience:usability
      - experience:reliability
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'oas3-api-servers' (OAS3 API Servers). Requirement: OpenAPI
      \"servers\" must be present and non-empty array. To fix: Adjust `servers` so
      it conforms to the schema this rule requires. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
