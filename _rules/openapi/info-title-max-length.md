---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: info-title-max-length
title: Info Title Max Length
severity: info
given: $.info
message: Info Title MUST Be Less Than 50 Characters
description: Having a limitation on the length of the title for your API helps
  provide constraints for teams naming it, but also keep consistent with other
  APIs from across teams.
experience:
  - consistency
  - documentation
spec:
  - info
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/info-title-max-length/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'info-title-max-length' (Info Title Max Length). Requirement:
  Having a limitation on the length of the title for your API helps provide
  constraints for teams naming it, but also keep consistent with other APIs from
  across teams. To fix: Ensure the length of `title` is at most 50. This rule is
  evaluated at the JSONPath `$.info` — inspect every location it matches and
  correct only what violates the rule. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid OpenAPI. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  info-title-max-length:
    title: Info Title Max Length
    reference: https://spotlight-rules.com/spec/rules/openapi/info-title-max-length/
    description: Having a limitation on the length of the title for your API helps
      provide constraints for teams naming it, but also keep consistent with other
      APIs from across teams.
    message: Info Title MUST Be Less Than 50 Characters
    severity: info
    given: $.info
    then:
      field: title
      function: length
      functionOptions:
        max: 50
    tags:
      - format:openapi
      - spec:info
      - experience:consistency
      - experience:documentation
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'info-title-max-length' (Info Title Max Length).
      Requirement: Having a limitation on the length of the title for your API
      helps provide constraints for teams naming it, but also keep consistent with
      other APIs from across teams. To fix: Ensure the length of `title` is at
      most 50. This rule is evaluated at the JSONPath `$.info` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
