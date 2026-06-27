---
layout: rule
artifact: finops
artifact_label: FinOps
slug: cost-finops-monthly-non-negative
title: Cost FinOps Monthly Non Negative
severity: info
given: $.costs[*].monthly
message: Cost monthly should be a non-negative number.
description: A cost monthly amount should be a non-negative number.
experience:
  - data-modeling
spec:
  - costs
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/cost-finops-monthly-non-negative/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'cost-finops-monthly-non-negative' (Cost FinOps Monthly Non
  Negative). Requirement: A cost monthly amount should be a non-negative number.
  To fix: Adjust the targeted value so it conforms to the schema this rule
  requires. This rule is evaluated at the JSONPath `$.costs[*].monthly` —
  inspect every location it matches and correct only what violates the rule.
  Make the smallest change that satisfies the rule, leave all unrelated content,
  key order, comments, and formatting unchanged, and keep the document valid
  FinOps. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  cost-finops-monthly-non-negative:
    title: Cost FinOps Monthly Non Negative
    reference: https://spotlight-rules.com/spec/rules/finops/cost-finops-monthly-non-negative/
    description: A cost monthly amount should be a non-negative number.
    message: Cost monthly should be a non-negative number.
    given: $.costs[*].monthly
    severity: info
    then:
      function: schema
      functionOptions:
        schema:
          type:
            - number
            - integer
          minimum: 0
    tags:
      - format:finops
      - spec:costs
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'cost-finops-monthly-non-negative' (Cost FinOps Monthly Non
      Negative). Requirement: A cost monthly amount should be a non-negative
      number. To fix: Adjust the targeted value so it conforms to the schema this
      rule requires. This rule is evaluated at the JSONPath `$.costs[*].monthly` —
      inspect every location it matches and correct only what violates the rule.
      Make the smallest change that satisfies the rule, leave all unrelated
      content, key order, comments, and formatting unchanged, and keep the
      document valid FinOps. Return only the complete corrected document, with no
      commentary."
---
