---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-require-period
title: Document FinOps Require Period
severity: info
given: $
message: FinOps should declare a period.
description: A FinOps artifact should declare a period (e.g. monthly, annual)
  for the budget and costs.
experience:
  - consistency
  - governance
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-period/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-require-period' (Document FinOps Require
  Period). Requirement: A FinOps artifact should declare a period (e.g. monthly,
  annual) for the budget and costs. To fix: Ensure `period` is present and
  non-empty at each matching location. Make the smallest change that satisfies
  the rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid FinOps. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-require-period:
    title: Document FinOps Require Period
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-period/
    description: A FinOps artifact should declare a period (e.g. monthly, annual)
      for the budget and costs.
    message: FinOps should declare a period.
    given: $
    severity: info
    then:
      field: period
      function: truthy
    tags:
      - format:finops
      - spec:document
      - experience:consistency
      - experience:governance
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-require-period' (Document FinOps Require
      Period). Requirement: A FinOps artifact should declare a period (e.g.
      monthly, annual) for the budget and costs. To fix: Ensure `period` is
      present and non-empty at each matching location. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid FinOps. Return only
      the complete corrected document, with no commentary."
---
