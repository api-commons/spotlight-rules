---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: request-support-accept-language
title: Request Support Accept Language
severity: info
given: $.paths[*][get,post,put,patch,delete]
message: Operation should accept an Accept-Language header.
description: Operations should accept an Accept-Language request header so
  clients can negotiate a localized response (i18n).
experience:
  - usability
  - consistency
spec:
  - parameters
topic:
  - content-negotiation
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/request-support-accept-language/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'request-support-accept-language' (Request Support Accept
  Language). Requirement: Operations should accept an Accept-Language request
  header so clients can negotiate a localized response (i18n). To fix: Adjust
  `parameters` so it conforms to the schema this rule requires. This rule is
  evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
  every location it matches and correct only what violates the rule. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid
  OpenAPI. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  request-support-accept-language:
    title: Request Support Accept Language
    reference: https://spotlight-rules.com/spec/rules/openapi/request-support-accept-language/
    description: Operations should accept an Accept-Language request header so
      clients can negotiate a localized response (i18n).
    message: Operation should accept an Accept-Language header.
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
                const: Accept-Language
              in:
                const: header
    tags:
      - format:openapi
      - spec:parameters
      - topic:content-negotiation
      - experience:usability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'request-support-accept-language' (Request Support Accept
      Language). Requirement: Operations should accept an Accept-Language request
      header so clients can negotiate a localized response (i18n). To fix: Adjust
      `parameters` so it conforms to the schema this rule requires. This rule is
      evaluated at the JSONPath `$.paths[*][get,post,put,patch,delete]` — inspect
      every location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
