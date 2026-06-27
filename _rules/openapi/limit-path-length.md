---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: limit-path-length
title: Limit Path Length
severity: info
given: $.paths.*~
message: APIs SHOULD NOT expand their total URL length beyond a few hundred characters.
description: APIs SHOULD NOT expand their total URL length beyond a few hundred characters.
experience:
  - usability
  - consistency
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/limit-path-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'limit-path-length' (Limit Path Length). Requirement: APIs
  SHOULD NOT expand their total URL length beyond a few hundred characters. To
  fix: Ensure the length of the targeted value is at most 100. This rule is
  evaluated at the JSONPath `$.paths.*~` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  limit-path-length:
    title: Limit Path Length
    reference: https://spotlight-rules.com/spec/rules/openapi/limit-path-length/
    description: APIs SHOULD NOT expand their total URL length beyond a few hundred
      characters.
    message: APIs SHOULD NOT expand their total URL length beyond a few hundred
      characters.
    severity: info
    given: $.paths.*~
    then:
      function: length
      functionOptions:
        max: 100
    tags:
      - format:openapi
      - spec:paths
      - experience:usability
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'limit-path-length' (Limit Path Length). Requirement: APIs
      SHOULD NOT expand their total URL length beyond a few hundred characters. To
      fix: Ensure the length of the targeted value is at most 100. This rule is
      evaluated at the JSONPath `$.paths.*~` — inspect every location it matches
      and correct only what violates the rule. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid OpenAPI. Return only the
      complete corrected document, with no commentary."
---
