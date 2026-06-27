---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-require-cost
title: Document FinOps Require Cost
severity: info
given: $
message: costs should be present
description: The `costs` property should be present.
experience:
  - governance
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-cost/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-require-cost' (Document FinOps Require Cost).
  Requirement: The `costs` property should be present. To fix: Ensure `costs` is
  present and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid FinOps. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-require-cost:
    title: Document FinOps Require Cost
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-cost/
    description: The `costs` property should be present.
    message: costs should be present
    severity: info
    given: $
    then:
      field: costs
      function: truthy
    tags:
      - format:finops
      - spec:document
      - experience:governance
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-require-cost' (Document FinOps Require
      Cost). Requirement: The `costs` property should be present. To fix: Ensure
      `costs` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      FinOps. Return only the complete corrected document, with no commentary."
---
