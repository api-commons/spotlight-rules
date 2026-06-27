---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: response-no-operational-header-in-spec
title: Response No Operational Header In Spec
severity: info
given: $.paths[*][*].responses[*].headers
message: Access-Control-*, Content-Type, and Accept Headers SHOULD NOT be
  specified explicitly in a spec as it an operational concern.
description: Access-Control-*, Content-Type, and Accept Headers SHOULD NOT be
  specified explicitly in a spec as it an operational concern.
experience:
  - consistency
  - governance
spec:
  - paths
  - responses
  - headers
topic:
  - cors
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/response-no-operational-header-in-spec/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'response-no-operational-header-in-spec' (Response No
  Operational Header In Spec). Requirement: Access-Control-*, Content-Type, and
  Accept Headers SHOULD NOT be specified explicitly in a spec as it an
  operational concern. To fix: Ensure the targeted value does NOT match the
  regular expression `^(Access-Control-.*|Content-Type|Accept)$`; rename or
  rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths[*][*].responses[*].headers` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  response-no-operational-header-in-spec:
    title: Response No Operational Header In Spec
    reference: https://spotlight-rules.com/spec/rules/openapi/response-no-operational-header-in-spec/
    description: Access-Control-*, Content-Type, and Accept Headers SHOULD NOT be
      specified explicitly in a spec as it an operational concern.
    message: Access-Control-*, Content-Type, and Accept Headers SHOULD NOT be
      specified explicitly in a spec as it an operational concern.
    severity: info
    given: $.paths[*][*].responses[*].headers
    then:
      function: pattern
      functionOptions:
        notMatch: ^(Access-Control-.*|Content-Type|Accept)$
    tags:
      - format:openapi
      - spec:paths
      - spec:responses
      - spec:headers
      - topic:cors
      - experience:consistency
      - experience:governance
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'response-no-operational-header-in-spec' (Response No
      Operational Header In Spec). Requirement: Access-Control-*, Content-Type,
      and Accept Headers SHOULD NOT be specified explicitly in a spec as it an
      operational concern. To fix: Ensure the targeted value does NOT match the
      regular expression `^(Access-Control-.*|Content-Type|Accept)$`; rename or
      rewrite any value that does. This rule is evaluated at the JSONPath
      `$.paths[*][*].responses[*].headers` — inspect every location it matches and
      correct only what violates the rule. Make the smallest change that satisfies
      the rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid OpenAPI. Return only the complete
      corrected document, with no commentary."
---
