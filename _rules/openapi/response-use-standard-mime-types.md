---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-use-standard-mime-types
title: Response Use Standard Mime Types
severity: info
given: $.paths[*][*].responses[*].content.*~
message: MIME types MUST be standard (application/json,
  application/problem+json, application/problem+xml) or use custom format
  application/vnd.*.
description: MIME types MUST be standard (application/json,
  application/problem+json, application/problem+xml) or use custom format
  application/vnd.*.
experience:
  - consistency
  - data-modeling
spec:
  - paths
  - responses
  - media-types
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-mime-types/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-use-standard-mime-types' (Response Use Standard Mime
  Types). Requirement: MIME types MUST be standard (application/json,
  application/problem+json, application/problem+xml) or use custom format
  application/vnd.*. To fix: Ensure the targeted value matches the regular
  expression `^application/(json|problem\\+json|problem\\+xml|vnd\\..*)$`;
  rewrite any value that does not. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].content.*~` — inspect every location it matches
  and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-use-standard-mime-types:
    title: Response Use Standard Mime Types
    reference: https://spotlight-rules.com/spec/rules/openapi/response-use-standard-mime-types/
    description: MIME types MUST be standard (application/json,
      application/problem+json, application/problem+xml) or use custom format
      application/vnd.*.
    message: MIME types MUST be standard (application/json,
      application/problem+json, application/problem+xml) or use custom format
      application/vnd.*.
    severity: info
    given: $.paths[*][*].responses[*].content.*~
    then:
      function: pattern
      functionOptions:
        match: ^application/(json|problem\+json|problem\+xml|vnd\..*)$
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:media-types
      - experience:consistency
      - experience:data-modeling
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-use-standard-mime-types' (Response Use Standard
      Mime Types). Requirement: MIME types MUST be standard (application/json,
      application/problem+json, application/problem+xml) or use custom format
      application/vnd.*. To fix: Ensure the targeted value matches the regular
      expression `^application/(json|problem\\+json|problem\\+xml|vnd\\..*)$`;
      rewrite any value that does not. This rule is evaluated at the JSONPath
      `$.paths[*][*].responses[*].content.*~` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
