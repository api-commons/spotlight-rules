---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-require-budget
title: Document FinOps Require Budget
severity: info
given: $
message: budget should be present
description: The `budget` property should be present.
experience:
  - governance
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-budget/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-require-budget' (Document FinOps Require
  Budget). Requirement: The `budget` property should be present. To fix: Ensure
  `budget` is present and non-empty at each matching location. Make the smallest
  change that satisfies the rule, leave all unrelated content, key order,
  comments, and formatting unchanged, and keep the document valid FinOps. Return
  only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-require-budget:
    title: Document FinOps Require Budget
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-budget/
    description: The `budget` property should be present.
    message: budget should be present
    severity: info
    given: $
    then:
      field: budget
      function: truthy
    tags:
      - format:finops
      - spec:document
      - experience:governance
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-require-budget' (Document FinOps Require
      Budget). Requirement: The `budget` property should be present. To fix:
      Ensure `budget` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      FinOps. Return only the complete corrected document, with no commentary."
---
