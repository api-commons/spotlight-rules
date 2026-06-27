---
layout: rule
artifact: finops
artifact_label: FinOps
slug: document-finops-require-currency
title: Document FinOps Require Currency
severity: info
given: $
message: currency should be present
description: The `currency` property should be present.
experience:
  - governance
  - data-modeling
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-currency/
prompt: "You are editing a FinOps document to satisfy the Spotlight API
  governance rule 'document-finops-require-currency' (Document FinOps Require
  Currency). Requirement: The `currency` property should be present. To fix:
  Ensure `currency` is present and non-empty at each matching location. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid FinOps.
  Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-finops-require-currency:
    title: Document FinOps Require Currency
    reference: https://spotlight-rules.com/spec/rules/finops/document-finops-require-currency/
    description: The `currency` property should be present.
    message: currency should be present
    severity: info
    given: $
    then:
      field: currency
      function: truthy
    tags:
      - format:finops
      - spec:document
      - experience:governance
      - experience:data-modeling
    prompt: "You are editing a FinOps document to satisfy the Spotlight API
      governance rule 'document-finops-require-currency' (Document FinOps Require
      Currency). Requirement: The `currency` property should be present. To fix:
      Ensure `currency` is present and non-empty at each matching location. Make
      the smallest change that satisfies the rule, leave all unrelated content,
      key order, comments, and formatting unchanged, and keep the document valid
      FinOps. Return only the complete corrected document, with no commentary."
---
