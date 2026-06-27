---
layout: rule
artifact: rate-limits
artifact_label: Rate Limits
slug: limit-max-positive
title: Limit Max Positive
severity: info
given: $.limits[*].max
message: Limit max should be a positive integer.
description: A limit max should be a positive integer.
experience:
  - data-modeling
  - reliability
spec:
  - limits
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-max-positive/
prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
  governance rule 'limit-max-positive' (Limit Max Positive). Requirement: A
  limit max should be a positive integer. To fix: Adjust the targeted value so
  it conforms to the schema this rule requires. This rule is evaluated at the
  JSONPath `$.limits[*].max` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid Rate Limits. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  limit-max-positive:
    title: Limit Max Positive
    reference: https://spotlight-rules.com/spec/rules/rate-limits/limit-max-positive/
    description: A limit max should be a positive integer.
    message: Limit max should be a positive integer.
    given: $.limits[*].max
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type: integer
          minimum: 1
    tags:
      - format:rate-limits
      - spec:limits
      - experience:data-modeling
      - experience:reliability
    prompt: "You are editing a Rate Limits document to satisfy the Spotlight API
      governance rule 'limit-max-positive' (Limit Max Positive). Requirement: A
      limit max should be a positive integer. To fix: Adjust the targeted value so
      it conforms to the schema this rule requires. This rule is evaluated at the
      JSONPath `$.limits[*].max` — inspect every location it matches and correct
      only what violates the rule. Make the smallest change that satisfies the
      rule, leave all unrelated content, key order, comments, and formatting
      unchanged, and keep the document valid Rate Limits. Return only the complete
      corrected document, with no commentary."
---
