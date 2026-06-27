---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-budget-non-negative
title: Document FinOps Budget Non Negative
severity: info
given: $.budget
message: budget should be a non-negative number.
description: budget should be a non-negative number.
experience:
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-budget-non-negative/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-budget-non-negative' (Document FinOps Budget
  Non Negative). Requirement: budget should be a non-negative number. To fix:
  Adjust the targeted value so it conforms to the schema this rule requires.
  This rule is evaluated at the JSONPath `$.budget` — inspect every location it
  matches and correct only what violates the rule. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid FinOps. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-budget-non-negative:
    title: Document FinOps Budget Non Negative
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-budget-non-negative/
    description: budget should be a non-negative number.
    message: budget should be a non-negative number.
    given: $.budget
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
      - spec:document
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-budget-non-negative' (Document FinOps
      Budget Non Negative). Requirement: budget should be a non-negative number.
      To fix: Adjust the targeted value so it conforms to the schema this rule
      requires. This rule is evaluated at the JSONPath `$.budget` — inspect every
      location it matches and correct only what violates the rule. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      FinOps. Return only the complete corrected document, with no commentary."
---
