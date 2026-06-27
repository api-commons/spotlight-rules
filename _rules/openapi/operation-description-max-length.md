---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: operation-description-max-length
title: Operation Description Max Length
severity: info
given: $.paths.*[get,post,patch,put,delete]
message: Operation Description MUST Be Less Than 250 Characters
description: Having a length limitation for each description of each API
  operation helps apply constraints to how you describe your APIs, while helping
  drive consistency across APIs when it comes to search, documentation, and
  other ways an API is made available.
experience:
  - documentation
  - consistency
spec:
  - paths
  - operations
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/operation-description-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'operation-description-max-length' (Operation Description Max
  Length). Requirement: Having a length limitation for each description of each
  API operation helps apply constraints to how you describe your APIs, while
  helping drive consistency across APIs when it comes to search, documentation,
  and other ways an API is made available. To fix: Ensure the length of
  `description` is at most 250. This rule is evaluated at the JSONPath
  `$.paths.*[get,post,patch,put,delete]` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  operation-description-max-length:
    title: Operation Description Max Length
    reference: https://spotlight-rules.com/spec/rules/openapi/operation-description-max-length/
    severity: info
    description: Having a length limitation for each description of each API
      operation helps apply constraints to how you describe your APIs, while
      helping drive consistency across APIs when it comes to search,
      documentation, and other ways an API is made available.
    message: Operation Description MUST Be Less Than 250 Characters
    given: $.paths.*[get,post,patch,put,delete]
    then:
      - field: description
        function: length
        functionOptions:
          max: 250
    tags:
      - format:openapi
      - spec:paths
      - spec:operations
      - experience:documentation
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'operation-description-max-length' (Operation Description
      Max Length). Requirement: Having a length limitation for each description of
      each API operation helps apply constraints to how you describe your APIs,
      while helping drive consistency across APIs when it comes to search,
      documentation, and other ways an API is made available. To fix: Ensure the
      length of `description` is at most 250. This rule is evaluated at the
      JSONPath `$.paths.*[get,post,patch,put,delete]` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
