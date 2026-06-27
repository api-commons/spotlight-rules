---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-baggage
title: Request Support Baggage
severity: info
given: $.paths[*][get,post,put,patch,delete]
message: Operation should accept a `baggage` request header.
description: Operations should accept a baggage request header (W3C Baggage /
  OpenTelemetry) so application-defined context propagates across services.
experience:
  - reliability
  - usability
  - observability
spec:
  - parameters
topic:
  - tracing
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-baggage/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-baggage' (Request Support Baggage).
  Requirement: Operations should accept a baggage request header (W3C Baggage /
  OpenTelemetry) so application-defined context propagates across services. To
  fix: Adjust `parameters` so it conforms to the schema this rule requires.
  Guidance: Operation should accept a `baggage` request header. This rule is
  evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-support-baggage:
    title: Request Support Baggage
    reference: https://spotlight-rules.com/spec/rules/openapi/request-support-baggage/
    description: Operations should accept a baggage request header (W3C Baggage /
      OpenTelemetry) so application-defined context propagates across services.
    message: Operation should accept a `baggage` request header.
    given: $.paths[*][get,post,put,patch,delete]
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
                const: baggage
              in:
                const: header
    tags:
      - format:openapi
      - spec:parameters
      - topic:tracing
      - experience:reliability
      - experience:usability
      - experience:observability
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-support-baggage' (Request Support Baggage).
      Requirement: Operations should accept a baggage request header (W3C Baggage
      / OpenTelemetry) so application-defined context propagates across services.
      To fix: Adjust `parameters` so it conforms to the schema this rule requires.
      Guidance: Operation should accept a `baggage` request header. This rule is
      evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
