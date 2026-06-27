---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-id-url-safe
title: Operation ID URL Safe
severity: info
given: $.paths[*][*]
message: OperationId must use URL friendly characters.
description: OperationId must use URL friendly characters.
experience:
  - naming
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-id-url-safe/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-id-url-safe' (Operation ID URL Safe). Requirement:
  OperationId must use URL friendly characters. To fix: Ensure `operationId`
  matches the regular expression `^[A-Za-z0-9-._~:/?#\\[\\]@!\\$&'()*+,;=]*$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.paths[*][*]` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
ruleyaml: >
  operation-id-url-safe:
    title: Operation ID URL Safe
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-id-url-safe/
    description: OperationId must use URL friendly characters.
    message: OperationId must use URL friendly characters.
    severity: info
    given: $.paths[*][*]
    then:
      field: operationId
      function: pattern
      functionOptions:
        match: ^[A-Za-z0-9-._~:/?#\[\]@!\$&'()*+,;=]*$
    formats:
      - oas3
      - oas3_1
    tags:
      - format:openapi
      - spec:paths
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-id-url-safe' (Operation ID URL Safe).
      Requirement: OperationId must use URL friendly characters. To fix: Ensure
      `operationId` matches the regular expression
      `^[A-Za-z0-9-._~:/?#\\[\\]@!\\$&'()*+,;=]*$`; rewrite any value that does
      not. This rule is evaluated at the JSONPath `$.paths[*][*]` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
