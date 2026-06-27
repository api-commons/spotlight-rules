---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-path-parameter
title: Limit Path Parameter
severity: info
given: $.paths.*~
message: The URL path should not contain more than 3 dynamic path parameters.
description: The URL path should not contain more than 3 dynamic path parameters.
experience:
  - usability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/limit-path-parameter/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'limit-path-parameter' (Limit Path Parameter). Requirement:
  The URL path should not contain more than 3 dynamic path parameters. To fix:
  Ensure the targeted value does NOT match the regular expression
  `^(.*{{1}.*){4,}`; rename or rewrite any value that does. This rule is
  evaluated at the JSONPath `$.paths.*~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  limit-path-parameter:
    title: Limit Path Parameter
    reference: https://spotlight-rules.com/spec/rules/openapi/limit-path-parameter/
    description: The URL path should not contain more than 3 dynamic path parameters.
    message: The URL path should not contain more than 3 dynamic path parameters.
    severity: info
    given: $.paths.*~
    then:
      function: pattern
      functionOptions:
        notMatch: ^(.*{{1}.*){4,}
    tags:
      - format:openapi
      - spec:paths
      - experience:usability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'limit-path-parameter' (Limit Path Parameter). Requirement:
      The URL path should not contain more than 3 dynamic path parameters. To fix:
      Ensure the targeted value does NOT match the regular expression
      `^(.*{{1}.*){4,}`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$.paths.*~` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
